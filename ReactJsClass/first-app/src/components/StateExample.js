import React, { Component } from "react";

export default class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to React Talks",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks For SubScribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
