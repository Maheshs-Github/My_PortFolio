import jwt from "jsonwebtoken";
import { User } from "../Models/PortFolioModels.js";

const Authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : null;

    if (!token) {
      return res
        .status(401)
        .json({ MSG: "No token provided", error: true, success: false });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id).select("-Password");

    if (!user) {
      return res
        .status(401)
        .json({ MSG: "Invalid token", error: true, success: false });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ MSG: "Invalid or expired token", error: true, success: false });
  }
};

const RequireAdmin = (req, res, next) => {
  if (req.user?.Role !== "admin") {
    return res
      .status(403)
      .json({ MSG: "Admin access required", error: true, success: false });
  }
  next();
};

export { Authenticate, RequireAdmin };
export default Authenticate;
