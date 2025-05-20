import React from "react";
import "./Nav.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav id="Nav " className="navbar">
      <h2 className="kels">Kinkel's Portfolio</h2>
      <button className="hamburger" onClick={toggleMenu}>
        {<FaBars />}
      </button>

      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              onClick={(e) =>
                e.preventDefault() ||
                document
                  .querySelector(item.path)
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
