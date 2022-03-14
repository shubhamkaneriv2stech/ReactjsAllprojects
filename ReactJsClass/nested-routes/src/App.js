import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "./navigation/Page";


// https://dev.to/ms_yogii/react-router-a-simple-tutorial-on-nested-routes-1237

const App = ({ routes }) => (
  // We use <BrowserRouter> in order to support
  // <BrowserRouter> could be safely replaced with <Router> in
  // your production application.
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {routes.map(route => 
        {
          return(
            <Route key={route.path} path={route.path}>
            <Page route={route} />
          </Route>
          )
        }
       
      )}
    </Switch>
  </BrowserRouter>
);

export default App;