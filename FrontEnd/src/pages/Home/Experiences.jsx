import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Experiences = ({ title }) => {
  const [expInx, setExpInx] = useState(0);
  const Experience = useSelector((state) => state.PortFolio.Experiences);
  const current = Experience[expInx];

  if (!current) return null;

  return (
    <div id="experience" className="scroll-mt-24">
      <SectionTitle title={title} index="02" />
      <div className="flex flex-col lg:flex-row justify-between gap-10 xl:gap-20 py-16 w-full">
        <div className="font-mono text-base flex flex-row lg:flex-col gap-2 lg:gap-4 border-l-2 border-term-border overflow-x-auto lg:overflow-visible">
          {Experience.map((Data, index) => (
            <div
              onClick={() => setExpInx(index)}
              className="cursor-pointer w-fit"
              key={index}
            >
              <h1
                className={`text-sm sm:text-base px-4 py-2.5 text-nowrap rounded-md transition-colors ${
                  expInx === index
                    ? "border-l-4 -ml-[2px] border-tertiory text-tertiory bg-tertiory/10"
                    : "text-term-muted hover:text-white"
                }`}
              >
                {Data.Period}
              </h1>
            </div>
          ))}
        </div>
        <div className="text-white flex flex-col gap-3 lg:gap-4 w-fit">
          <h2 className="text-2xl text-secondary font-medium font-mono">
            {current.Role}
          </h2>
          <h3 className="text-lg font-medium text-tertiory">
            {current.Company}
          </h3>
          <h3 className="text-base text-white/80 leading-relaxed max-w-xl">
            {current.Description}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
