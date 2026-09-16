import React, { useState } from "react";
import InputField from "../UI/InputField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../utils/BASE_URL";
import { applyStoredToken } from "../../utils/authHeader";
import toast from "react-hot-toast";

const LogIn = () => {
  const navigate = useNavigate();
  const [logInData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const HandleOnChnage = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const HandleSignUpCall = async (Data) => {
    try {
      const res = await axios.post(`${BASE_URL}Login`, Data);
      if (res.data?.Token) {
        localStorage.setItem("token", res.data.Token);
        applyStoredToken();
      }
      toast.success(res.data.MSG);
      navigate("/admin");
    } catch (error) {
      toast.error(error.response?.data?.MSG || "Login failed");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    HandleSignUpCall(logInData);
    setLoginData({
      Email: "",
      Password: "",
    });
  };

  return (
    <div className="flex justify-center items-center py-24 sm:py-40 px-4">
      <div className="w-full sm:w-[440px] bg-panel border border-term-border rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-term-border bg-primary/60 font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-red/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-secondary/70"></span>
          <span className="text-term-muted text-xs ml-2">login.sh</span>
        </div>
        <div className="bg-gray-50 p-6 sm:p-8">
          <form onSubmit={handleSubmit}>
            <h2 className="w-full pb-2 text-center text-2xl font-semibold">
              Log In
            </h2>
            <hr className="pb-4 pt-1" />

            <InputField
              name={"Email"}
              label={"Email"}
              placeholder={"Enter Email"}
              onChange={HandleOnChnage}
              value={logInData.Email}
              type={"email"}
              required
            />
            <InputField
              name={"Password"}
              label={"Password"}
              placeholder={"Enter Password"}
              onChange={HandleOnChnage}
              value={logInData.Password}
              type={"password"}
              required
            />
            <button className="px-6 py-1.5 bg-primary rounded-md text-white text-lg font-medium hover:scale-[1.02] transition-transform my-6 mx-auto w-full">
              Log In
            </button>
          </form>
          <span className="text-sm">
            Don't have an Account? Create One{" "}
            <button
              className="text-URL-Blue font-medium"
              onClick={() => navigate("/auth/signup")}
            >
              Sign Up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
