import React from "react";

const SpecialButton = props => {
  return (
    <button
      className="buttons"
      onClick={() => props.setDD(props.dd + props.special)}
    >
      {props.special}
    </button>
  );
};

export default SpecialButton;
