import React, { useState, useEffect } from "react";

export default function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    !props.mobileMenuIn && setMenuOpen(false);
  }, [props.mobileMenuIn]);

  const handleLinkClick = e => {
    const page = e.target.innerHTML;
    props.handleLinkClick(page);
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    props.handleMobileMenu();
  };

  return (
    <div className="header">
      <div className="logo" onClick={() => window.location.reload()}>
        <h1>ERICH KOPP</h1>
        <h4>FILM PHOTOGRAPHY</h4>
      </div>
      <div className="header-links">
        <div onClick={handleLinkClick}>WORK</div>
        <div onClick={handleLinkClick}>CONTACT</div>
      </div>
      <div className="mobile-trigger">
        <i
          onClick={handleMenu}
          className={menuOpen ? "fas fa-times" : "fas fa-bars"}
        />
      </div>
    </div>
  );
}
