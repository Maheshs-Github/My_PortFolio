import React from "react";
import Icons from "../../Icons/Icons";

const LeftSocialSideBar = () => {
  return (
    <div className="hidden sm:inline-block sm:fixed sm:left-10 sm:bottom-0">
      <div className="text-white/70 flex flex-col items-center gap-5 w-fit">
        <a
          href="https://www.linkedin.com/in/mahesh-mane-b14a79257/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.Linkedin size={18} className="hover:text-tertiory transition-colors" />
        </a>
        <a href="mailto:maheshmane9075@gmail.com" target="_blank" rel="noopener noreferrer">
          <Icons.Email size={20} className="hover:text-tertiory transition-colors" />
        </a>
        <a
          href="https://github.com/Maheshs-Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.Github size={20} className="hover:text-tertiory transition-colors" />
        </a>
        <div className="bg-term-border w-px h-24"></div>
      </div>
    </div>
  );
};

export default LeftSocialSideBar;
