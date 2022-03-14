import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div>
      <h2 className={props.rang}>Hello {props.name}</h2>
    </div>
  );
};

export default User;
