import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Error from "./Components/Pages/Error";
import Home from "./Components/Pages/Home";
import Post from "./Components/Pages/Post";

const App = () => {
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

          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
