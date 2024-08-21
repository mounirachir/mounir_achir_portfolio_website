import Image from "next/image";
import React from "react";
interface Props {
  src: string;
  title: string;
  description: string;
}
const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="grid md:grid-cols-2 overflow-hidden rounded-lg relative shadow-lg border border-[#2a0e61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-full"
      />
      <div className="relative p-4">
        <h2 className="text-2xl lg:text-4xl font-semibold text-white">
          {title}
        </h2>
        <p className="text-sm lg:text-3xl mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
