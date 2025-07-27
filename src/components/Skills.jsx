import React, { useState } from "react";
import puzzle from "../assets/puzzle.png";
import { allskills } from "./SkillName";

export default function Skills() {
  const skills = ["Languages", "Frontend", "Backend", "Others"];
  const [selectedSkill, setSelectedSkill] = useState("");

  const handleSkillShow = (skill) => {
    setSelectedSkill(skill);
  };

  const handleSkillHide = (skill) => {
    setSelectedSkill("");
  };

  return (
    <div
      className="pt-10 md:pt-20 px-5 lg:px-10 pb-20 flex flex-col max-w-6xl mx-auto justify-center gap-6"
      id="skills"
    >
      <div className="flex items-center gap-4">
        <span className="text-2.5xl lg:text-4xl poppins-medium">Skills</span>
        <img className="h-[38px] mb-1" src={puzzle} alt="" />
      </div>
      <div className="mt-4 md:mt-12">
        <div className="">
          <div className="font-semibold text-lg lg:text-1.5xl">
            Empowering Innovations :
          </div>
          <div className="mt-2 text-lg lg:text-1.5xl italic">
            Skills that make a difference
          </div>
        </div>
        <div className="mt-5 md:mt-10 italic tracking-wide leading-7 lg:text-lg">
          "I'm an accomplished developer with a wide-ranging skill set,
          proficient in various programming languages and technologies. My
          expertise covers both front-end and back-end development, and I'm
          well-versed in essential tools and platforms, ensuring a versatile
          approach to software solutions."
        </div>
        <div className="mt-8 md:mt-14 lg:mt-24 justify-between">
          <div className="flex gap-5 sm:gap-6 lg:gap-12 flex-wrap">
            {skills.map((skill) => (
              <div
                onMouseEnter={() => handleSkillShow(skill)}
                onMouseLeave={() => handleSkillHide(skill)}
                className={`${
                  skill == selectedSkill
                    ? "bg-gradient-to-r from-amber-500 to-rose-500 shadow-lg text-white"
                    : "bg-gradient-to-r from-slate-400 to-violet-200 text-black"
                } poppins-medium transition-all prevent-select py-3 px-7 sm:px-8 lg:px-6 text-center rounded-lg hover:scale-105 lg:text-lg`}
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="flex gap-6 flex-wrap mt-12 sm:mt-14">
            {allskills.map((skill) => (
              <div
                className={`${
                  skill.category == selectedSkill
                    ? "bg-gradient-to-r from-blue-200 to-cyan-200 text-gray-700 poppins-medium shadow-md"
                    : ""
                }bg-violet-100 px-3 prevent-select lg:px-8 py-2 sm:py-3 text-black poppins-regular rounded-lg transition-all text-sm`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
