import React from "react";

const SwitchMessage = ({ on }) => {
  return (
    <div>
      <div> The Button is {on ? "on" : "off"}</div>
    </div>
  );
};

export default SwitchMessage;
