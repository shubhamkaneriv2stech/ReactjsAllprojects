import React, { Component } from "react";
import Student from "./Student";

export default class App extends Component {
  constructor(props) {
    super(props);

    console.log("App -constrcutor Called");
    console.log(props);

    this.state = {
      roll: "101",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App -Get Derived Method");
    console.log(props, state);
    return null;
  }

  componentDidMount() {
    console.log("App- Component Did Mount ");
  }

  render() {
    console.log("App- rendered");
    return (
      <>
        <Student name="Shubham" />
      </>
    );
  }
}
