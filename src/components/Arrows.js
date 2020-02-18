import React from "react";

export default function Arrows(props) {
  return (
    <div className="arrows">
      <div id="left-arrow" onClick={props.leftArrowClick}>
        <i className="fas fa-angle-left" />
      </div>
      <div id="right-arrow" onClick={props.rightArrowClick}>
        <i className="fas fa-angle-left fa-flip-horizontal" />
      </div>
    </div>
  );
}
