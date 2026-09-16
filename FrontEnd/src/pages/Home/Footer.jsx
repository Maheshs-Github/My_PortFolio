import React from "react";
import Icons from "../../Icons/Icons";

const Footer = () => {
  return (
    <div className="pt-16 pb-8">
      <div className="w-full h-px bg-term-border"></div>
      <div className="text-white/80 flex items-center justify-end gap-5 w-full pt-6 sm:hidden">
        <a
          href="https://www.linkedin.com/in/mahesh-mane-b14a79257/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.Linkedin size={20} className="hover:text-tertiory transition-colors" />
        </a>
        <a href="mailto:maheshmane9075@gmail.com" target="_blank" rel="noopener noreferrer">
          <Icons.Email size={22} className="hover:text-tertiory transition-colors" />
        </a>
        <a
          href="https://github.com/Maheshs-Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.Github size={22} className="hover:text-tertiory transition-colors" />
        </a>
      </div>

      <div className="text-sm text-term-muted font-mono flex flex-col items-center gap-1 pt-10">
        <p>Designed and built by</p>
        <p className="text-white/80">Mahesh Mane</p>
      </div>
    </div>
  );
};

export default Footer;
