import React, { useState } from "react";

import Profile from "../Profile/Profile";
import img from "../img/img.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../stylesheet/DashBoard.css";

import Topbar from "../Topbar/Topbar";
import SideBar from "../Sidebar/SideBar";

import Login from "../Login/Login";

const Approuter = () => {
  //State For UserLogging Or NotLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Login Success Function
  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  //LogoutSuccess Function
  const onLogoutSuccess = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Router>
          <Switch>
            <Login onLoginSuccess={onLoginSuccess} />
          </Switch>
        </Router>
      ) : (
        <>
          <Router>
            <SideBar img={img} />
            <Topbar logout={onLogoutSuccess} />
            <Switch>
              <Route exact path="/" component={Profile} />
            </Switch>
          </Router>
        </>
      )}
    </>
  );
};

export default Approuter;
