import React from "react";
import "../styles/About.css";
import "../navigation/Nav.css";
import Aboutimg from "../assets/imagesfold/Aboutimg.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__container">
        <h1>About Me</h1>
        <img src={Aboutimg} alt="image" />
        <p>
          Hi, I’m Okereke Kinkel, a passionate web developer who loves bringing
          ideas to life through code. With expertise in Python, React.js,
          JavaScript, HTML, and CSS, I specialize in crafting responsive,
          user-friendly web applications that look great and perform seamlessly.
          Whether it’s building dynamic frontends with React or robust backends
          with Python, I’m all about creating clean, efficient solutions that
          solve real problems.
        </p>
        <p>
          I'm a passionate full-stack web developer with expertise in crafting
          seamless, user-focused digital experiences
        </p>

        <p>
          With a strong foundation in both front-end and backend development, i
          specalize in building, responsive, high-performance websites and
          applications that blends functionality with elegant design
        </p>
      </div>
    </div>
  );
};

export default About;
