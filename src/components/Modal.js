import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import Arrows from "./Arrows";

export default function Modal(props) {
  const [modalImg, setModalImg] = useState(props.imgSrc);
  const [modalIn, setModalIn] = useState(false);

  useEffect(() => {
    props.showModal && setModalIn(true);
  }, [props.showModal]);

  const handleCloseModal = () => {
    setModalIn(false);

    const closeTimer = setTimeout(() => {
      props.closeModal();
    }, 500);

    return () => {
      clearTimeout(closeTimer);
    };
  };

  return (
    <>
      <CSSTransition
        in={modalIn}
        timeout={1000}
        classNames="modal-bg"
        unmountOnExit
      >
        <div className="modal">
          <i className="modal-close fas fa-times" onClick={handleCloseModal} />
          <Arrows
            leftArrowClick={() =>
              modalImg > 1 && setModalImg(() => setModalImg(modalImg - 1))
            }
            rightArrowClick={() =>
              modalImg < 33 && setModalImg(() => setModalImg(modalImg + 1))
            }
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={modalIn}
        timeout={1000}
        classNames="modal-img"
        unmountOnExit
      >
        <div className="modal-img">
          <img
            src={`https://erichkopp.github.io/assets/${modalImg}.jpg`}
            alt=""
            onClick={handleCloseModal}
          />
        </div>
      </CSSTransition>
    </>
  );
}
