import { useState } from "react";

export const useCounter = (initialState = 0) => {
  const [state, setState] = useState(initialState);

  const increment = (factorMas = 1) => {
    setState(state + factorMas);
  };

  const decrement = (factorRes = 2) => {
    setState(state - factorRes);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
