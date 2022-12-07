import React, { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2 } = counter;

  return (
    <>
      <h2>Counter App: {counter2}</h2>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter({ ...counter, counter2: counter2 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};
