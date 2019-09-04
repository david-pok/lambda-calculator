import React from "react";

const NumberButton = props => {
  return (
    <button
      className="buttons"
      onClick={() => props.setDD(props.dd + props.number)}
    >
      {props.number}
    </button>
  );
};

export default NumberButton;
