import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Projects = ({ title }) => {
  const [proInx, setProInx] = useState(0);
  const ProjectsData = useSelector((state) => state.PortFolio.Projects);
  const current = ProjectsData[proInx];

  if (!current) return null;

  return (
    <div id="projects" className="scroll-mt-24">
      <SectionTitle title={title} index="03" />
      <div className="flex flex-col lg:flex-row justify-between gap-10 xl:gap-20 py-16 w-full">
        <div className="font-mono text-base flex flex-row lg:flex-col gap-2 lg:gap-4 border-l-2 border-term-border overflow-x-auto lg:overflow-visible">
          {ProjectsData.map((Data, index) => (
            <div
              onClick={() => setProInx(index)}
              className="cursor-pointer w-fit"
              key={index}
            >
              <h1
                className={`text-sm sm:text-base px-4 py-2.5 text-nowrap rounded-md transition-colors ${
                  proInx === index
                    ? "border-l-4 -ml-[2px] border-tertiory text-tertiory bg-tertiory/10"
                    : "text-term-muted hover:text-white"
                }`}
              >
                {Data.Title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex xl:flex-row flex-col gap-8">
          {current.ProjectImgURL && (
            <img
              src={current.ProjectImgURL}
              alt={`${current.Title} preview`}
              className="max-w-72 object-contain border border-term-border rounded-md p-1 bg-panel"
            />
          )}
          <div className="text-white flex flex-col gap-4 lg:gap-6 w-fit max-w-xl">
            <h2 className="text-2xl text-secondary font-medium font-mono">
              {current.Title}
            </h2>
            <h3 className="text-base text-white/80 leading-relaxed">
              {current.ProjectDescription}
            </h3>
            {(current.LiveURL || current.RepoURL) && (
              <div className="flex gap-4 font-mono text-sm pt-1">
                {current.LiveURL && (
                  <a
                    href={current.LiveURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tertiory border border-tertiory rounded px-3 py-1.5 hover:bg-tertiory hover:text-primary transition-colors"
                  >
                    live_demo →
                  </a>
                )}
                {current.RepoURL && (
                  <a
                    href={current.RepoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 border border-term-border rounded px-3 py-1.5 hover:border-tertiory hover:text-tertiory transition-colors"
                  >
                    view_code →
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
