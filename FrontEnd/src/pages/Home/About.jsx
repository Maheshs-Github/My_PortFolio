import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const FALLBACK_SKILLS = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux Toolkit",
  "Tailwind CSS",
];

const About = () => {
  const AboutMe = useSelector((state) => state.PortFolio.AboutMe);
  const skills =
    AboutMe?.Skills && AboutMe.Skills.length ? AboutMe.Skills : FALLBACK_SKILLS;

  return (
    <div id="about" className="scroll-mt-24 bg-primary">
      <SectionTitle title="About Me" index="01" />
      <div className="lg:flex-row lg:items-start py-8 flex flex-col gap-10">
        <div className="text-white/90 lg:max-w-[55%] space-y-4 text-base sm:text-lg leading-relaxed">
          <p>
            I'm a full stack developer working on the MERN stack — currently a
            Junior Full Stack Developer at Osumare Marketing Solutions, Pune,
            and finishing an M.Sc. in Computer Science at SPPU.
          </p>
          <p>
            I like taking a project from a rough idea to a working product:
            designing the data model, wiring up the API, and building an
            interface people can actually use.
          </p>
          <p>
            Recently I've been deep in multi-role platforms — role-based
            dashboards, admin CMS panels, and API contracts that frontend and
            backend both honor exactly.
          </p>
        </div>
        <div className="lg:w-[45%] w-full bg-panel border border-term-border rounded-lg font-mono text-sm overflow-hidden self-start">
          <div className="px-4 py-2 border-b border-term-border text-term-muted text-xs">
            skills.json
          </div>
          <div className="p-5">
            <p className="text-tertiory">{"{"}</p>
            <p className="pl-4 text-white/80">
              "stack": <span className="text-secondary">"MERN"</span>,
            </p>
            <p className="pl-4 text-white/80">"skills": [</p>
            <div className="pl-8 flex flex-wrap gap-2 py-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="border border-tertiory/50 text-tertiory rounded px-2 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="pl-4 text-white/80">]</p>
            <p className="text-tertiory">{"}"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
