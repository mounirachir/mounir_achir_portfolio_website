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
      <div className="h-full w-full md:flex md:flex-col gap-10 px-10">
        <a
          href="https://fitness-test-z77a.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/fitness-app.png"
            title="The Fit-Club"
            description="A full-stack fitness app that helps beginners start their health journey by generating fitness plans automatically for them depending on their personal information and preferences ."
          />
        </a>

        <a
          href="https://mern-example-qoms.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/account.png"
            title="Account Creation App"
            description="A simple full-stack app that focuses on user authentification and it allows him to create an account in it and log in and out of it to get access to his dashboard ."
          />
        </a>
        <a
          href="https://to-do-list-react-1.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/todolist.png"
            title="To-Do-List"
            description="A simple to do list app that keeps track of your daily goals by saving them in the local storage of the browser ."
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
            description="A website that contains 4 popular games we used to play when we were kids, they are the snake, tick tack toe, ping pong and rock paper scissors ."
          />
        </a>
        <a
          href="https://react-check-4.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/movie.png"
            title="Movie Library"
            description="A movie library that allows the user to add movies and filter them based on their names and ratings and he can even watch the movie trailers in it ."
          />
        </a>

        <a
          href="https://mounirachir.github.io/weather-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/weather.png"
            title="Weather App"
            description="A simple weather app that gives you weather information about the place you look for in the search bar such as the humidity, wind speed and temperature ."
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
