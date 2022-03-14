import React, { useState } from "react";
import List from "../List/List";
import Profile from "../Profile/Profile";
import img from "../img/img.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../stylesheet/DashBoard.css";
import { LOGOUT } from "../countdown/types/Types";
import Todo from "../Todo/Todo";
import PassingData from "../ReusableTable/PassingData";
import TodoContextReducer from "../ContextReducer/TodoContextReducer";
import { fetchWeatherApiData } from "../countdown/Actions/weatherapiindex";
import { fetchPostsApiData } from "../countdown/Actions/postManagementindex";
import { useDispatch } from "react-redux";

import Topbar from "../Topbar/Topbar";
import SideBar from "../Sidebar/SideBar";
import User from "../Table/User";
import Restaurant from "../List/Restaurant";
import BasicTable from "../ReactTable/BasicTable";

import Login from "../Login/Login";
import { GlobalProvider } from "../ContextReducer/GlobalState";
import UserTable from "../Table/UserTable";

import CountDown from "../countdown/CountDown";
import NewWeatherApi from "../weatherapi/NewWeatherApi";
import NewPost from "../PostsManagement/NewPost";

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

  const dispatch = useDispatch();

  // const weatherApiData = useSelector((state) => state.weatherApiReducer);
  // console.log(weatherApiData, " api calling");

  // const dispatch = useDispatch();

  // useEffect(() => {
  //      dispatch(fetchWeatherApiData());
  // }, [])

  // After Successful login or not Successful login  Returning Router Part

  dispatch({ type: LOGOUT });

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
          {dispatch(fetchWeatherApiData())}
          {dispatch(fetchPostsApiData())}

          <Router>
            <GlobalProvider>
              <SideBar img={img} />
              <Topbar logout={onLogoutSuccess} />
              <Switch>
                <Route exact path="/" component={Profile} />
                <Route exact path="/list" component={List} />
                <Route exact path="/list/:id" component={Restaurant} />
                <Route exact path="/table" component={UserTable} />
                <Route exact path="/table/:id" component={User} />
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/todo/:id" component={Todo} />
                <Route exact path="/commonTable" component={PassingData} />
                <Route
                  exact
                  path="/TodoAppContext"
                  component={TodoContextReducer}
                />
                <Route exact path="/reactTable" component={BasicTable} />

                <Route exact path="/weatherapi" component={NewWeatherApi} />

                <Route exact path="/PostsTable" component={NewPost} />
                <Route exact path="/countDown" component={CountDown} />
              </Switch>
            </GlobalProvider>
          </Router>
        </>
      )}
    </>
  );
};

export default Approuter;
