import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="buttons">
      {props.special}
    </button>
  );
};

export default SpecialButton;