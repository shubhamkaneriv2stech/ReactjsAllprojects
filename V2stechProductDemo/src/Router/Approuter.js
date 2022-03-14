import React, { useState } from "react";

import img from "../assests/img/img.png";

import "../stylesheet/DashBoard.css";

import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SideBar from "../common/SideBar";
import Header from "../common/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";

const Approuter = () => {
  //State For UserLogging Or NotLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Login Success Function
  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  //LogoutSuccess Function
  const onLogoutSuccess = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };
  return (
    <>
      {!isLoggedIn ? (
        <Router>
          <>
            <Routes>
              <Route
                path="/"
                element={<Login onLoginSuccess={onLoginSuccess} />}
              />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Routes>
          </>
        </Router>
      ) : (
        <>
          <Router>
            <SideBar img={img} />
            <Header logout={onLogoutSuccess} />

            <Routes>
              <Route path="/" element={<Profile />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
};

export default Approuter;
