import { useState } from "react";

export const useCounter = ( initialValue: number = 10 ) => {
  const [counter, setCounter] = useState(initialValue);

  const hanldeAdd = () => {
    setCounter(counter + 1);
  };

  const hanldeSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const hanldeReset = () => {
    setCounter(initialValue);
  };

  return {
    // Props o values
    counter,

    // Methods / Actions
    hanldeAdd,
    hanldeSubtract,
    hanldeReset,
  };
};
