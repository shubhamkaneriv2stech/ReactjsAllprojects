import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    console.log("App Mounted");
  }

  componentWillUnmount() {
    console.log("App UnMounted");
  }
  render() {
    console.log("App Rendered");
    return (
      <div>
        <h1>Hello App Component</h1>
      </div>
    );
  }
}
