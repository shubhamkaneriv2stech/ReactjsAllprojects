import React from "react";

const SwitchButton = ({ onToggle }) => {
  return (
    <div>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
};

export default SwitchButton;
