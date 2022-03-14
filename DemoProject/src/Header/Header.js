import React from "react";
import { NavLink } from "react-router-dom";
import img from "../img/img.png";
const Header = () => {
  return (
    <div>
      <header className="header-fixed">
        <div className="header-limiter">
          <img src={img} alt="" width="142" height="75" />
          <nav>
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: "#608bd2",
              }}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/studentList"
              activeStyle={{
                color: "#608bd2",
              }}
            >
              StudentList
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
