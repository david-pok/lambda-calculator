import React from "react";

const OperatorButton = props => {
  return (
    <button
      className="buttons"
      onClick={() => props.setDD(props.dd + props.operator)}
    >
      {props.operator}
    </button>
  );
};

export default OperatorButton;
