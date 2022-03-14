import React from "react";

const User = (props) => {
  console.log(props.value);
  return (
    <div>
      <li>{props.value}</li>
    </div>
  );
};

export default User;
