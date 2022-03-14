import React from "react";

export default function Logout(props) {
  return (
    <>
      <button onClick={props.displayLogout} className="btn btn-danger">
        Logout
      </button>
    </>
  );
}
