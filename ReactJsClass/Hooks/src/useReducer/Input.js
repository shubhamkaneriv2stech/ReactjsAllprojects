import React from "react";

const Input = ({ id, changed, value, label }) => {
  <div>
    <label>{label}</label>

    <input id={id} onChange={changed} value={value} type="text" />
  </div>;
};

export default Input;
