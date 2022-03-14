import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseDetail from "../components/CourseDetail";
import CourseList from "../components/CourseList";

const Approuter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CourseList} />

        <Route exact path="/:id" component={CourseDetail} />
      </Switch>
    </Router>
  );
};

export default Approuter;
