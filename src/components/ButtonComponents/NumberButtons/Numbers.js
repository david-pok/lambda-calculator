import React, { useState } from "react";
import numbers from "../../../data.js";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  // const map1 = numberState.map(number => number);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {/* {map1}
      {numbers.map(num => num + 1)} */}
      {numberState}
      {numbers}
    </div>
  );
};
export default Numbers;
