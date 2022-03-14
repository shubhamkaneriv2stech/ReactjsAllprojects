import React from "react";
import Login from "../Login";
import Logout from "../Logout";

const AuthButton = (props) => {
  // let { isLoggedIn } = props;

  switch (props.isLoggedIn) {
    case true:
      // return <button className="btn btn-primary ">Login</button>;
      return <Login />;

    case false:
      // return <button className="btn btn-danger ">LogOut</button>;
      return <Logout />;
    default:
      return null;
  }
};

export default AuthButton;
