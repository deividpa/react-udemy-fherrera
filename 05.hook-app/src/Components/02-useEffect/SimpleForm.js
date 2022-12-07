import React, { useState, useEffect } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("Hey!");
  }, []);

  useEffect(() => {
    console.log("formState cambió!");
  }, [formState]);

  useEffect(() => {
    console.log("email cambió!");
  }, [email]);

  const handleInput = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
      <h2>useEffect - Simple Form</h2>
      <hr />
      <div className="form-group">
        <input
          autoComplete="off"
          type="text"
          name="name"
          className="form-control"
          placeholder="Ingresar nombre..."
          value={name}
          onChange={handleInput}
        />
        <br />
        <input
          autoComplete="off"
          type="email"
          name="email"
          className="form-control"
          placeholder="Ingresar email..."
          value={email}
          onChange={handleInput}
        />
      </div>
    </>
  );
};
