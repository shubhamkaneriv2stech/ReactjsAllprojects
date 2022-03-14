import React, { Component } from "react";
import Saurabh from "./Saurabh";
import Shubham from "./Shubham";

export default class App extends Component {
  render() {
    return (
      <div>
        <Shubham camp="120" />

        <Saurabh camp="140" />
      </div>
    );
  }
}
