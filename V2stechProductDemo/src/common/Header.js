import React from "react";
import { useNavigate } from "react-router-dom";
const Header = ({ logout }) => {
  const navigate = useNavigate();
  const logoutFunction = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-xs-12">
          <nav
            className="navbar  justify-content-between"
            style={{
              right: 0,
              left: 0,
              position: "absolute",
              top: 0,
              padding: " 3px 0px 4px 292px",
              backgroundColor: "#007bff",
              zIndex: 1,
            }}
          >
            <span className="navbar-brand" style={{ paddingLeft: "32px" }}>
              Dashboard
            </span>
            <button
              className="btn btn-danger"
              onClick={logoutFunction}
              style={{ marginRight: "20px" }}
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
