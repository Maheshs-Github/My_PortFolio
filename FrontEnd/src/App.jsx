import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Admin from "./pages/Admin/Admin";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import axios from "axios";
import BASE_URL from "../utils/BASE_URL";
import {
  setAboutMe,
  setContact,
  setEducation,
  setExperiences,
  setIntro,
  setProjects,
} from "../redux/PortfolioSlice";
import Loader from "./components/Loader";
import Auth from "./components/Auth/Auth";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import NotFound from "./pages/NotFound";
import { applyStoredToken } from "./utils/authHeader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const Dispatch = useDispatch();

  useEffect(() => {
    applyStoredToken();
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [introRes, aboutRes, expRes, proRes, eduRes, conRes] =
          await Promise.all([
            axios.get(`${BASE_URL}getIntro`),
            axios.get(`${BASE_URL}GetAboutMe`),
            axios.get(`${BASE_URL}GetExperience`),
            axios.get(`${BASE_URL}GetProject`),
            axios.get(`${BASE_URL}GetEducation`),
            axios.get(`${BASE_URL}GetContact`),
          ]);

        Dispatch(setIntro(introRes.data.Data?.[0] || {}));
        Dispatch(setAboutMe(aboutRes.data.Data?.[0] || {}));
        Dispatch(setExperiences(expRes.data?.Data || []));
        Dispatch(setProjects(proRes.data?.Data || []));
        Dispatch(setEducation(eduRes.data?.Data || []));
        Dispatch(setContact(conRes.data?.Data?.[0] || {}));
      } catch (error) {
        toast.error("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [Dispatch]);

  return (
    <div>
      <Toaster
        position="top-center"
        containerStyle={{ margin: "60px" }}
        reverseOrder={false}
      />
      <div className="overflow-x-hidden font-over bg-primary">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route path="/auth" element={<Auth />}>
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<LogIn />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
