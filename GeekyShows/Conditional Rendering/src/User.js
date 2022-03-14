import React from "react";

const User = (props) => {
  return (
    <>
      <h1>Welcome {props.name}</h1>
      <button onClick={props.isLoggedOut}>Logout</button>
      {/* 
      <h1> Welcome User Prime Member</h1> */}
    </>
  );
};

export default User;
