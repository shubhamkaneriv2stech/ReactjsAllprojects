import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth);
  console.log(login);
  return (
    <div className="container">
      <form action="">
        <input
          className="form-control m-3"
          placeholder="username"
          type="text"
        />

        <input
          className="form-control m-3"
          placeholder="password"
          type="password"
        />

        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "login" })}
        >
          {login.isLoggedIn ? "Logout" : "Login"}
        </button>
      </form>
    </div>
  );
}
