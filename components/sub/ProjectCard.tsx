import Image from "next/image";
import React from "react";
interface Props {
  src: string;
  title: string;
  description: string;
}
const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg relative shadow-lg border-t border-r border-l border-[#2a0e61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-full"
      />
      <div className="relative p-4">
        <h2 className="text-xl lg:text-3xl font-semibold text-white">
          {title}
        </h2>
        <p className="text-sm lg:text-xl mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
