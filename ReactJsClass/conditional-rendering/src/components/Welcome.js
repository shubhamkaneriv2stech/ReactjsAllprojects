import React from "react";

export default function Welcome(props) {
  if (props.isLoggedIn) {
    return <h1>Please LogIn</h1>;
  } else {
    return <h1>Welcome</h1>;
  }
}
