import React from "react";
// import GuestUser from "./GuestUser";
// import Welcome from "./Welcome";

export default function CheckLogin(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome</h1>;
  } else {
    return <h1>Please LogIn</h1>;
  }
}
