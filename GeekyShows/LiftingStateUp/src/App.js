import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";
export default class App extends Component {
  state = {
    name: "Shubham Kaneri",
  };

  render() {
    return (
      <>
        <User name={this.state.name} />
        <Guest name={this.state.name} />
      </>
    );
  }
}
