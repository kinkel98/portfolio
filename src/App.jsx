import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Nav from "./navigation/Nav";
import Skills from "./Pages/Skills";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
