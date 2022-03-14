import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Dashboard from "./Components/Pages/Dashboard";
import Error from "./Components/Pages/Error";
import Home from "./Components/Pages/Home";
import Post from "./Components/Pages/Post";

const App = () => {
  let isLogged = false;
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/post/:category" component={Post} />
          <Route exact path="/post/:category/:id" component={Post} />

          {/* <Route exact path="/contact">
            <Contact companyName="V2sTech" />
          </Route> */}

          {/* <Route
            exact
            path="/contact"
            render={() => <Contact companyName="V2sTech" />}
          /> */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login">
            {isLogged ? <Redirect to="/dashboard" /> : <Home />}
          </Route>

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
