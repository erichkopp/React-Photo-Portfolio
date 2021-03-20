import React, { useState, useEffect } from "react";
import ReactImageAppear from 'react-image-appear';

import Modal from "./Modal";
import Arrows from "./Arrows";

export default function Work() {
  const [modalImg, setModalImg] = useState();
  const [showModal, setShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  let images = [];
  for (let i = 1; i < 34; i++) {
    images.push(
      // <img
      //   key={i}
      //   src={`https://erichkopp.github.io/assets/${i}.jpg`}
      //   className="scrolling-img"
      //   alt=""
      //   onClick={() => handleOpenModal(i)}
      // />
      <ReactImageAppear
        key={i}
        src={`https://erichkopp.github.io/assets/${i}.jpg`}
        className="scrolling-img"
        alt={`Image ${i}`}
        onClick={() => handleOpenModal(i)}
      />
    );
  }

  let wrapper;

  const scrollWrapperRight = () => {
    wrapper.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollWrapperLeft = () => {
    wrapper.scrollBy({ left: -600, behavior: "smooth" });
  };

  const handleScrollWheel = e => {
    if (windowWidth > 1024 && !showModal) {
      e.preventDefault();
      const wrapperScrollPosition = wrapper.scrollLeft;
      wrapper.scrollTo({
        top: 0,
        left: wrapperScrollPosition + e.deltaY,
        behaviour: "smooth"
      });
    }
  };

  const handleOpenModal = i => {
    setModalImg(i);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImg();
  };

  return (
    <div
      className="scrolling-wrapper disable-scrollbars"
      ref={node => (wrapper = node)}
      onWheel={e => handleScrollWheel(e)}
    >
      {images}

      <div className="mobile-copyright">
        <i className="far fa-copyright" /> ERICHKOPP 2020
      </div>

      <Arrows
        leftArrowClick={scrollWrapperLeft}
        rightArrowClick={scrollWrapperRight}
      />

      {showModal && (
        <Modal
          imgSrc={modalImg}
          closeModal={handleCloseModal}
          showModal={showModal}
        />
      )}
    </div>
  );
}
