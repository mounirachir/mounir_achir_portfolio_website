import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 mb-48"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap gap-5 items-center mt-4">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center mt-4">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center mt-4">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap gap-5 items-center mt-4">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
