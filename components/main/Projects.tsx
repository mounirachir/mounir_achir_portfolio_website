import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full md:grid md:grid-cols-3 gap-10 px-10">
        <a
          href="https://live-arvea-nature.pantheonsite.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/arvea-remake.png"
            title="Arvea Remake"
            description="As part of my internship at a 360° marketing agency, I recreated the Arvea-Nature website on WordPress, designing a clean and user-friendly interface to highlight their parapharmaceutical products ."
          />
        </a>
        <a
          href="https://fitness-test-z77a.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/fitness-app.png"
            title="The Fit-Club"
            description="I developed a full-stack fitness website that assists beginners in kickstarting their health journey, automatically generating fitness plans tailored to their personal details and specific preferences ."
          />
        </a>

        <a
          href=" https://mounirachir.github.io/nostalgic-games/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/nostalgia.png"
            title="Nostalgic Games"
            description="I created a dynamic website featuring four nostalgic games from our childhood days. This includes timeless classics like Snake, Tic-Tac-Toe, Ping Pong, and Rock-Paper-Scissors ."
          />
        </a>
      </div>
      <div className="mt-5 h-full w-full md:grid md:grid-cols-2 gap-10 px-10">
        <a
          href="https://mounirachir.github.io/weather-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/weather.png"
            title="Weather App"
            description="A simple weather app that gives you weather information about the place you look for in the search bar ."
          />
        </a>
        <a
          href="https://mounirachir.github.io/qr-code-generator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/qr.png"
            title="QR Code Generator"
            description="An app that generates a QR code from the text that the user puts in the input box."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
