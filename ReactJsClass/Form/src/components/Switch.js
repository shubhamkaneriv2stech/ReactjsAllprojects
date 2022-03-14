import React from "react";
import SwitchButton from "./SwitchButton";
import SwitchMessage from "./SwitchMessage";

const Switch = ({ on, onToggle }) => {
  return (
    <div>
      {/* <div> The Button is {on ? "on" : "off"}</div> */}
      {/* <button onClick={onToggle}>Toggle</button> */}

      <SwitchButton onToggle={onToggle} />
      <SwitchMessage on={on} />
    </div>
  );
};

export default Switch;
