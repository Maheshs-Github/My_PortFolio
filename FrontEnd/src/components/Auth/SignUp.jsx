import React, { useState } from "react";
import InputField from "../UI/InputField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../utils/BASE_URL";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [SignUpData, setSignUpData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const HandleOnChnage = (e) => {
    setSignUpData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const HandleSignUp = async () => {
    try {
      const res = await axios.post(`${BASE_URL}SignUp`, SignUpData);
      toast.success(res.data.MSG);
      navigate("/auth/login");
    } catch (error) {
      toast.error(error.response?.data?.MSG || "Sign up failed");
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    HandleSignUp();
    setSignUpData({
      Name: "",
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
          <span className="text-term-muted text-xs ml-2">signup.sh</span>
        </div>
        <div className="bg-gray-50 p-6 sm:p-8">
          <form onSubmit={HandleSubmit}>
            <h2 className="w-full pb-2 text-center text-2xl font-semibold">
              Sign Up
            </h2>
            <hr className="pb-4 pt-1" />
            <InputField
              name={"Name"}
              label={"Name"}
              placeholder={"Enter Name"}
              onChange={HandleOnChnage}
              value={SignUpData.Name}
              required
            />
            <InputField
              name={"Email"}
              label={"Email"}
              placeholder={"Enter Email"}
              onChange={HandleOnChnage}
              value={SignUpData.Email}
              type={"email"}
              required
            />
            <InputField
              name={"Password"}
              label={"Password"}
              placeholder={"Enter Password"}
              onChange={HandleOnChnage}
              value={SignUpData.Password}
              type={"password"}
              required
            />
            <button className="px-6 py-1.5 bg-primary rounded-md text-white text-lg font-medium hover:scale-[1.02] transition-transform my-6 mx-auto w-full">
              Sign Up
            </button>
          </form>
          <span className="text-sm">
            Already have an Account? Just{" "}
            <button
              className="text-URL-Blue font-medium"
              onClick={() => navigate("/auth/login")}
            >
              Log In
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
