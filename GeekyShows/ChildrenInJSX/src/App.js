import React, { Component } from "react";
import Student from "./Student";
import StudentClass from "./StudentClass";

export default class App extends Component {
  render() {
    return (
      <>
        <Student>I Am child</Student>
        <StudentClass> Student class</StudentClass>
      </>
    );
  }
}
