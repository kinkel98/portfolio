import "../styles/Skills.css"; // Import the CSS file for styling
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div id="Skills" className="Skills">
      <h1>Skills</h1>
      <p>Here are some of my skills:</p>
      <div className="skill-list">
        <div className="skill">
          <FaHtml5 className="skill-icon html-icon" />
          <span>HTML</span>
        </div>
        <div className="skill">
          <FaCss3Alt className="skill-icon css-icon" />
          <span>CSS</span>
        </div>
        <div className="skill">
          <FaJs className="skill-icon js-icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaReact className="skill-icon react-icon" />
          <span>React JS</span>
        </div>
        <div className="skill">
          <FaPython className="skill-icon python-icon" />
          <span>Python</span>
        </div>
        <div className="skill">
          <FaGitAlt className="skill-icon git-icon" />
          <span>Git</span>
        </div>
        <div className="skill">
          <FaPython className="skill-icon django-icon" />
          <span>Django</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
