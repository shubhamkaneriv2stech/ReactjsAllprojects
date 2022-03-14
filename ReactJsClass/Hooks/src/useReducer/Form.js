import Input from "./Input";
import React from "react";

export default function Form({ state, dispatch }) {
  const initialForm = {
    username: {
      label: "Username",
      value: "",
    },

    email: {
      label: "Email",
      value: "",
    },

    Password: {
      label: "Password",
      value: "",
    },
  };

  return (
    <div>
      <form>
        {Object.keys(state).map((key) => {
          return (
            <Input
              changed={({ target: { value } }) => dispatch({ value, key })}
              key={key}
              id={key}
              value={state[key].value}
              label={state[key].label}
            />
          );
        })}
      </form>
    </div>
  );
}
