import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Edit from "./components/student/Edit";
import Home from "./components/pages/Home";
import View from "./components/student/View";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
