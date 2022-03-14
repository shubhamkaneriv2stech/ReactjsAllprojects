import React, { useState } from "react";

import PropTypes from "prop-types";
import applicationLogo from "../assests/img/logo.png";

import { Link } from "react-router-dom";
import { SaveStudentData } from "../functions/AxiosFunction";

const Login = ({ onLoginSuccess }) => {
  //used HisTory hook for the getting route data

  //Show Error Messages While Login
  const [errMsg, seterrMsg] = useState({
    msg: "",
    color: "",
  });

  //Intial State of the UserDetails
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  //handling function for the input field and their values
  const handler = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const [validated, setValidated] = useState(false);

  //Login Submit Handler Function
  const submitHandler = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      SaveStudentData(
        { username: userDetails.username, password: userDetails.password },
        null,
        null,
        null
      ).then(
        () => {
          onLoginSuccess();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setValidated(false);
          seterrMsg({
            msg: resMessage,
            color: "text-danger",
          });
        }
      );
    }
  };

  return (
    <div
      style={{
        margin: "100px",
        width: "100%",

        padding: "10px",
      }}
    >
      <div
        style={{
          marginLeft: "400px",
          width: "100%",
          padding: "10px",
        }}
      >
        <div md={8} sm={12} lg={7}>
          <div
            style={{
              borderRadius: "0.25rem",
              border: "1px solid #007bff",
            }}
          >
            <div
              style={{
                backgroundColor: "#007bff",
                color: "white",
              }}
            >
              <div className="text-center">
                <div
                  variant="top"
                  src={applicationLogo}
                  style={{
                    width: "140px",
                  }}
                />
              </div>
              <div noValidate validated={validated} onSubmit={submitHandler}>
                <div>
                  <div>Username</div>
                  <div
                    id="userName"
                    type="text"
                    name="username"
                    value={userDetails.username}
                    onChange={handler}
                    required
                  />
                  <div
                    type="invalid"
                    style={{
                      textAlign: "left",
                      marginBottom: 8,
                    }}
                  >
                    <strong> Username is required</strong>
                  </div>
                </div>
                <br />
                <div>
                  <div>Password</div>
                  <div
                    type="password"
                    id="password"
                    name="password"
                    value={userDetails.password}
                    onChange={handler}
                    required
                  />
                  <div
                    type="invalid"
                    style={{
                      textAlign: "left",
                      marginBottom: 8,
                    }}
                  >
                    <strong> Password is required</strong>
                  </div>
                </div>
                <br />
                <div
                  style={{ marginLeft: "40%" }}
                  className="btn btn-sm btn-success text-uppercase"
                  type="submit"
                >
                  Sign in
                </div>
                <strong
                  className={`d-flex justify-content-center ${errMsg.color} `}
                >
                  {errMsg.msg}
                </strong>

                <strong
                  style={{
                    display: "flex",
                    marginLeft: "250px",
                  }}
                >
                  <Link
                    to="/forgotPassword"
                    style={{
                      color: "white",

                      textDecoration: "none",
                    }}
                  >
                    Forgot Password ?
                  </Link>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Checking PropTypes In Login Component
Login.propTypes = {
  onLoginSuccess: PropTypes.func,
};

export default Login;
