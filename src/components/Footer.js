import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <i className="far fa-copyright" /> ERICHKOPP 2020
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/erich-kopp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="https://www.instagram.com/erichkopp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  );
}
