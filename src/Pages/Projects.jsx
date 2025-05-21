import React from "react";
import projectimg from "../assets/imagesfold/projectimg.png";
import "../styles/Projects.css";
import logowest from "../assets/imagesfold/logowest.png";
import weather from "../assets/imagesfold/weather.png";
import Tubeking from "../assets/imagesfold/Tubeking.png";
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1>Projects </h1>
      <p>Here are some of my projects:</p>

      <div className="project-grid">
        <div className="project" data-category="web">
          <img src={logowest} alt="An online baking website" />
          <h3>An Online Banking Website</h3>
          <p>A online banking website built and fully responsive</p>
          {/* <a href="https://westglobalbanking.com/" target="_blank">
            View Project
          </a> */}
        </div>
        <div className="project" data-category="web">
          <img src={weather} alt="An online baking website" />
          <h3> A Real Time Weather Website</h3>
          <p>A dynamic weather app built with React with use of API</p>
          {/* <a href="#" target="_blank">
            View Project
          </a> */}
        </div>
        <div className="project" data-category="web">
          <img src={Tubeking} alt="An online baking website" />
          <h3>A Video Streaming Website</h3>
          <p>A responsive video streaming website/Replica of youtube</p>
          {/* <a href="#" target="_blank">
            View Project
          </a> */}
        </div>
      </div>
    </div>
  );
};
export default Projects;
