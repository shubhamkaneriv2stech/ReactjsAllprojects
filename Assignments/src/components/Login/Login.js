import React, { useState } from "react";

const Login = (props) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handler = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(userDetails.username, userDetails.password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin" onSubmit={submitHandler}>
                <div className="form-label-group">
                  <label htmlFor="userName">User Name</label>
                  <input
                    id="userName"
                    type="text"
                    className="form-control"
                    name="username"
                    value={userDetails.username}
                    onChange={handler}
                  />
                </div>

                <div className="form-label-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userDetails.password}
                    onChange={handler}
                    className="form-control"
                  />
                </div>
                <br />
                <button
                  style={{ marginLeft: "43%" }}
                  className="btn btn-sm btn-success text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
                <strong
                  className={`d-flex justify-content-center ${props.errMsg.color}`}
                >
                  {props.errMsg.msg}
                </strong>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
