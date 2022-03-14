import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> */}

        <li className="nav-item">
          <NavLink
            to="/"
            activeStyle={{ fontWeight: "bold", color: "red" }}
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink
            to="/about"
            activeStyle={{ fontWeight: "bold", color: "red" }}
            exact
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            activeStyle={{ fontWeight: "bold", color: "red" }}
            exact
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/post/mobile"
            activeStyle={{ fontWeight: "bold", color: "red" }}
            exact
          >
            Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/post/mobile/1"
            activeStyle={{ fontWeight: "bold", color: "red" }}
            exact
          >
            Post With Id
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
