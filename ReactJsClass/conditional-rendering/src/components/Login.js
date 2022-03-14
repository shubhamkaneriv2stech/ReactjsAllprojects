import React from "react";

export default function Login(props) {
  console.log(props.displayLogin + " Login props");

  return (
    <>
      <button onClick={props.displayLogin} className="btn btn-primary ">
        Login
      </button>
    </>
  );
}
