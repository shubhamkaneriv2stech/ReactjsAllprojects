import React from "react";
import applicationLogo from "../assests/img/logo.png";

import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div>
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
                <div noValidate>
                  <div>
                    <div>Username</div>
                    <div id="userName" type="text" name="username" required />
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

                  <div
                    style={{ marginLeft: "40%", marginTop: "20px" }}
                    className="btn btn-sm btn-success text-uppercase"
                    type="submit"
                  >
                    Submit
                  </div>
                  <strong
                    style={{
                      display: "flex",
                      marginLeft: "250px",
                      marginTop: "10px",
                    }}
                  >
                    <Link
                      to="/"
                      style={{
                        color: "white",

                        textDecoration: "none",
                      }}
                    >
                      Back to Login page ?
                    </Link>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
