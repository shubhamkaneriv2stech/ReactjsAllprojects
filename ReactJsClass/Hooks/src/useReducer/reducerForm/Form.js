import React, { useReducer, useState } from "react";

import formReducer from "./reducer/formReducer";

const initialFormState = {
  username: "",
  email: "",
  password: "",
  hasConsented: false,
};

const Form = () => {
  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")

  //const [state, dispatch] = useReducer(reducerFunc, initialState)
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleTextChange = (e) => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      data: e.target.value,
    });
  };

  return (
    <form action="">
      <label htmlFor="">Username</label>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={(e) => handleTextChange(e)}
      />

      <label htmlFor="">Email</label>
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={(e) => handleTextChange(e)}
      />

      <h1> Email is:{formState.email}</h1>
      <h1> UserName is:{formState.username}</h1>
    </form>
  );
};

export default Form;
