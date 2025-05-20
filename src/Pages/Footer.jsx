import React from "react";
import "../styles/Footer.css";
const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Kinkel Chima. All rights reserved.</p>
      <a
        href="https://drive.google.com/file/d/1uQa-9mH4aV18GGlhNS9Kk_fCr17aX29b/view?usp=drivesdk"
        className="cv-button"
      >
        Get CV
      </a>
    </footer>
  );
};
export default footer;
