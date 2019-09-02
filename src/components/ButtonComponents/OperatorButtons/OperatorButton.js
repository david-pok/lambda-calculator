import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="buttons">
      {props.operator}
    </button>
  );
};

export default OperatorButton;