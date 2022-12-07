import React from "react";

import { CounterApp } from "./Components/01-useState/CounterApp";
import { CounterWithCustomHook } from "./Components/01-useState/CounterWithCustomHook";
import { SimpleForm } from "./Components/02-useEffect/SimpleForm";

export const HookApp = () => {
  return (
    <div>
      <h2>Hola mundo</h2>
      <CounterApp />
      <hr />
      <CounterWithCustomHook />
      <hr />
      <SimpleForm />
    </div>
  );
};
