import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StudentList from "../components/StudentList";
import StudentDetail from "../components/StudentDetail";
import Home from "../components/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Approuter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/studentList" component={StudentList} />
        <Route exact path="/studentList/:id" component={StudentDetail} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default Approuter;
