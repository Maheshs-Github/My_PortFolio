import React from "react";

const SectionTitle = ({ title, index = "01" }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 w-full mt-[100px] font-mono">
      <span className="text-term-muted text-xs sm:text-sm">{index}</span>
      <h2 className="text-secondary text-xl sm:text-3xl whitespace-nowrap">
        <span className="text-term-muted">// </span>
        {title}
      </h2>
      <div className="bg-term-border h-px flex-grow"></div>
    </div>
  );
};

export default SectionTitle;
