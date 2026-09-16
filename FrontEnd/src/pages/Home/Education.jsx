import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Education = ({ title }) => {
  const EducationData = useSelector((state) => state.PortFolio.Education);
  const [eduInx, setEduInx] = useState(0);
  const current = EducationData[eduInx];

  if (!current) return null;

  return (
    <div id="education" className="scroll-mt-24">
      <SectionTitle title={title} index="04" />
      <div className="flex flex-col lg:flex-row justify-between gap-10 xl:gap-20 py-16 w-full">
        <div className="font-mono text-base flex flex-row lg:flex-col gap-2 lg:gap-4 border-l-2 border-term-border overflow-x-auto lg:overflow-visible">
          {EducationData.map((Data, index) => (
            <div
              onClick={() => setEduInx(index)}
              className="cursor-pointer w-fit"
              key={index}
            >
              <h1
                className={`text-sm sm:text-base px-4 py-2.5 text-nowrap truncate max-w-xs rounded-md transition-colors ${
                  eduInx === index
                    ? "border-l-4 -ml-[2px] border-tertiory text-tertiory bg-tertiory/10"
                    : "text-term-muted hover:text-white"
                }`}
              >
                {Data.CourseTitle}
              </h1>
            </div>
          ))}
        </div>
        <div className="text-white flex flex-col gap-4 lg:gap-6 w-fit">
          <h2 className="text-2xl text-secondary font-medium font-mono">
            {current.CourseTitle}
          </h2>
          <h3 className="text-lg font-medium text-tertiory">
            {current.SchoolorCollgeName}
          </h3>
          <div className="flex gap-4 items-center text-white/80 font-mono text-sm">
            <div className="flex gap-2 items-center">
              <span className="bg-tertiory w-2 h-2 rounded-full"></span>
              <span>{current.StartYear}</span>
            </div>
            <div className="bg-term-border w-6 h-px"></div>
            <div className="flex gap-2 items-center">
              <span className="bg-tertiory w-2 h-2 rounded-full"></span>
              <span>{current.EndYear}</span>
            </div>
          </div>
          <h2 className="text-white/80">{current.PercentageOrCGPA}</h2>
        </div>
      </div>
    </div>
  );
};

export default Education;
