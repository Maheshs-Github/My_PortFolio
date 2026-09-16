import React from "react";
import { useSelector } from "react-redux";

const Intro = () => {
  const Intro = useSelector((state) => state.PortFolio.Intro);

  return (
    <div className="sm:min-h-[75vh] min-h-[85vh] flex items-center pt-24">
      <div className="w-full bg-panel border border-term-border rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-term-border bg-primary/60">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-red/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-secondary/70"></span>
          <span className="text-term-muted text-xs ml-2 font-mono">intro.sh</span>
        </div>
        <div className="p-6 sm:p-10 flex flex-col gap-4">
          <p className="text-term-muted font-mono text-sm sm:text-base">
            <span className="text-tertiory">$</span> whoami
          </p>
          <h2 className="text-secondary text-3xl sm:text-5xl md:text-6xl font-medium font-mono">
            {Intro.FName && Intro.LName
              ? `${Intro.FName} ${Intro.LName}`
              : "Mahesh Mane"}
          </h2>
          <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-medium">
            {Intro.Caption || "Full Stack Developer — MERN"}
          </h2>
          <p className="text-term-muted font-mono text-sm sm:text-base mt-2">
            <span className="text-tertiory">$</span> cat about.md
          </p>
          <p className="text-white/80 leading-relaxed max-w-2xl text-base sm:text-lg">
            {Intro.Description ||
              "I'm a full stack developer working with the MERN stack, currently building product features at Osumare Marketing Solutions. I like turning ambiguous requirements into clean, working systems."}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="w-fit text-tertiory border-2 border-tertiory font-mono py-2 px-5 rounded-md hover:bg-tertiory hover:text-primary transition-colors text-sm sm:text-base"
            >
              view_projects()
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-fit text-white/80 border-2 border-term-border font-mono py-2 px-5 rounded-md hover:border-tertiory hover:text-tertiory transition-colors text-sm sm:text-base"
            >
              download_resume()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
