import React from "react";

const Guest = (props) => {
  return (
    <>
      <h1>Welcome guest</h1>
      <button onClick={props.isLoggedIN}>Login</button>
      <button>Signup</button>
    </>
  );
};

export default Guest;
