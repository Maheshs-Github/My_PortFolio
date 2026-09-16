import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import Icons from "../../Icons/Icons";

const PRIVATE_KEYS = ["_id", "__v", "lottieImgURL"];

const Contact = ({ title }) => {
  const UserData = useSelector((state) => state.PortFolio.Contact) || {};
  const entries = Object.keys(UserData).filter(
    (key) => !PRIVATE_KEYS.includes(key)
  );

  return (
    <div id="contact" className="scroll-mt-24">
      <SectionTitle title={title} index="05" />
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between py-12">
        <div className="w-full lg:w-2/3 bg-panel border border-term-border rounded-lg font-mono text-sm sm:text-base overflow-hidden">
          <div className="px-4 py-2 border-b border-term-border text-term-muted text-xs">
            contact.json
          </div>
          <div className="p-6 text-tertiory">
            <p>{"{"}</p>
            {entries.map((key, index) => (
              <p key={index} className="pl-4">
                <span className="text-white/80">"{key}"</span>: "
                <span className="text-secondary">{UserData[key]}</span>"
                {index < entries.length - 1 ? "," : ""}
              {console.log("entries: ",entries)}
              </p>
            ))}
            <p>{"}"}</p>
          </div>
        </div>
        <div className="flex lg:flex-col flex-row gap-4">
          <a
            href={`mailto:${UserData?.email || "maheshmane9075@gmail.com"}`}
            className="flex items-center gap-2 text-white/80 hover:text-tertiory transition-colors"
          >
            <Icons.Email size={20} /> <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mahesh-mane-b14a79257/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-tertiory transition-colors"
          >
            <Icons.Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Maheshs-Github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-tertiory transition-colors"
          >
            <Icons.Github size={20} /> <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
