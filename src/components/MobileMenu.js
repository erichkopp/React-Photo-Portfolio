import React from "react";

export default function MobileMenu(props) {
  const handleLinkClick = e => {
    const page = e.target.innerHTML;
    props.handleLinkClick(page);
  };

  return (
    <div className="mobile-menu">
      <ul>
        <li onClick={handleLinkClick}>WORK</li>
        <li onClick={handleLinkClick}>CONTACT</li>
        <li>
          <a
            onClick={handleLinkClick}
            href="https://www.linkedin.com/in/erich-kopp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a
            onClick={handleLinkClick}
            href="https://www.instagram.com/erichkopp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li />
        <li />
      </ul>
    </div>
  );
}
