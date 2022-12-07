import React from "react";

import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(10);
  console.log(state);

  return (
    <>
      <h2>CounterWithCustomHook</h2>
      <h3>{state}</h3>
      <button className="btn btn-success" onClick={() => increment(2)}>
        +
      </button>
      <button className="btn btn-warning" onClick={() => decrement(3)}>
        -
      </button>
      <button className="btn btn-warning" onClick={reset}>
        Reset
      </button>
    </>
  );
};
