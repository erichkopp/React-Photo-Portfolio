import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles.css";

export default function Main() {
  const [workIn, setWorkIn] = useState(false);
  const [contactIn, setContactIn] = useState(false);
  const [mobileMenuIn, setMobileMenuIn] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    setWorkIn(true);
    setContactIn(false);
  }, []);

  const switchPages = page => {
    if (page === "WORK") {
      setContactIn(false);

      const workTimer = setTimeout(() => {
        setWorkIn(true);
      }, 800);

      return () => {
        clearTimeout(workTimer);
      };
    } else if (page === "CONTACT") {
      setWorkIn(false);

      const contactTimer = setTimeout(() => {
        setContactIn(true);
      }, 800);

      return () => {
        clearTimeout(contactTimer);
      };
    }
  };

  const handleLinkClick = page => {
    if (windowWidth <= 1024) {
      setMobileMenuIn(false);

      const pageSwitchTimer = setTimeout(() => {
        switchPages(page);
      }, 500);

      return () => {
        clearTimeout(pageSwitchTimer);
      };
    } else {
      switchPages(page);
    }
  };

  const handleMobileMenu = () => {
    setMobileMenuIn(!mobileMenuIn);
  };

  return (
    <div className="main">
      <Header
        handleLinkClick={handleLinkClick}
        handleMobileMenu={handleMobileMenu}
        mobileMenuIn={mobileMenuIn}
      />

      <CSSTransition
        in={mobileMenuIn}
        timeout={{
          enter: 1000,
          exit: 500
        }}
        classNames="menu"
        unmountOnExit
      >
        <MobileMenu handleLinkClick={handleLinkClick} />
      </CSSTransition>

      <div className="main-content">
        <CSSTransition
          in={workIn}
          timeout={{
            enter: 3000,
            exit: 500
          }}
          classNames="work-contact"
          unmountOnExit
        >
          <Work />
        </CSSTransition>

        <CSSTransition
          in={contactIn}
          timeout={{
            enter: 3000,
            exit: 500
          }}
          classNames="work-contact"
          unmountOnExit
        >
          <Contact />
        </CSSTransition>
      </div>

      <Footer />
    </div>
  );
}
