import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import TableChartIcon from "@material-ui/icons/TableChart";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
const SideBar = ({ img }) => {
  const [menu] = useState({
    list: [
      {
        id: "profile",
        value: "Profile",
        url: "/",
        icon: <AccountCircleIcon />,
      },

      {
        value: "Student list",
        id: "table",
        url: "/table",
        icon: <TableChartIcon />,
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
        <img src={img} alt="" width="150" />
      </div>
      <hr />
      <ul
        className="listItem"
        // style={{ height: "400px", overflowX: "scroll" }}
      >
        {menu.list.length > 0 &&
          menu.list.map((items, i) => {
            return (
              <li key={i}>
                <Link
                  to={items.url}
                  onClick={() => list(items.id)}
                  className={
                    state === items.id
                      ? "active  align-items-center"
                      : "align-items-center"
                  }
                  style={{
                    color: "#403c3c",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      marginRight: "6px",
                    }}
                  >
                    {items.icon}
                  </span>
                  {items.value}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

//Checking PropTypes In Login Component
SideBar.propTypes = {
  img: PropTypes.string,
};

export default SideBar;
