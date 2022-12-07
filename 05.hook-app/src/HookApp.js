import React from "react";

import { CounterApp } from "./Components/01-useState/CounterApp";
import { CounterWithCustomHook } from "./Components/01-useState/CounterWithCustomHook";

export const HookApp = () => {
  return (
    <div>
      <h2>Hola mundo</h2>
      <CounterApp />
      <hr />
      <CounterWithCustomHook />
    </div>
  );
};
