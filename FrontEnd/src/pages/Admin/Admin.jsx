import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminIntro from "./AdminIntro";
import AdminAboutMe from "./AdminAboutMe";
import AdminExperience from "./AdminExperience";
import AdminEducation from "./AdminEducation";
import AdminProject from "./AdminProject";
import AdminContact from "./AdminContact";
import { logout } from "../../utils/authHeader";

const TABS = ["Intro", "About", "Experience", "Education", "Project", "Contact"];

const Admin = () => {
  const [tab, setTab] = useState("Intro");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <div className="pt-[70px] sm:pt-[100px] pb-16 2xl:px-0 flex justify-center w-screen">
      <div className="px-[10px] py-[10px] sm:py-[20px] 2xl:w-[1200px] w-full">
        <div className="flex items-center justify-between gap-2 mb-2 font-mono">
          <span className="text-term-muted text-xs sm:text-sm">
            $ admin<span className="text-tertiory">/</span>
          </span>
          <button
            onClick={handleLogout}
            className="text-xs sm:text-sm text-term-muted hover:text-primary-red transition-colors"
          >
            logout()
          </button>
        </div>
        <div className="overflow-x-auto flex gap-1 border-b border-term-border font-mono">
          {TABS.map((t) => (
            <button
              key={t}
              className={`text-sm sm:text-base cursor-pointer px-4 py-2.5 whitespace-nowrap border-b-2 transition-colors ${
                tab === t
                  ? "border-tertiory text-tertiory"
                  : "border-transparent text-term-muted hover:text-white"
              }`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="pt-6">
          <div className="bg-gray-50 text-black rounded-lg p-4 sm:p-8 overflow-hidden">
            {tab === "Intro" ? <AdminIntro /> : null}
            {tab === "About" ? <AdminAboutMe /> : null}
            {tab === "Experience" ? <AdminExperience /> : null}
            {tab === "Education" ? <AdminEducation /> : null}
            {tab === "Project" ? <AdminProject /> : null}
            {tab === "Contact" ? <AdminContact /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
