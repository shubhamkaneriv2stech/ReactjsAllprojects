import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
const SideBar = ({ img }) => {
  const [menu] = useState({
    list: [
      {
        id: "profile",
        value: "Profile",
        url: "/",
        icon: "",
      },
    ],
  });

  let [state, setState] = useState("");

  const list = (e) => {
    setState(e);
  };

  useEffect(() => {
    setState("profile");
  }, []);

  return (
    <div className="sidebar" style={{ zIndex: 99 }}>
      <div className="img">
        <img src={img} alt="" className="rounded-circle" width="150" />
      </div>
      <hr />
      <ul className="listItem">
        <li
          style={{
            color: "#403c3c",
            textDecoration: "none",

            backgroundColor: "rgb(0, 123, 255)",
          }}
        >
          <div style={{ marginLeft: "36px", fontSize: "16px" }}> Profile</div>
        </li>
      </ul>
    </div>
  );
};

//Checking PropTypes In Login Component
SideBar.propTypes = {
  img: PropTypes.string,
};

export default SideBar;
