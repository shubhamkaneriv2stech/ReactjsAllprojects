import React, { useReducer } from "react";
import initialForm from "./Form";

export default function FormReducer(prevState, { value, key }) {
  const [state, dispatch] = useReducer(FormReducer, initialForm);

  const updatedElement = { ...prevState[key] };

  updatedElement.value = value;

  return { ...prevState, [key]: updatedElement };
}
