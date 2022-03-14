import React, { Component } from "react";
import Student from "./Student";
import StudentClass from "./StudentClass";
export default class App extends Component {
  render() {
    return (
      <>
        <h1>shubham React World</h1>
        <Student name="Shubham" />
        <StudentClass name="Saurabh" />
      </>
    );
  }
}
