import React, { Component } from "react";
import Student from "./Student";
import StudentClass from "./StudentClass";

export default class App extends Component {
  render() {
    return (
      <>
        <Student rollNo={1234} />
        <StudentClass rollNo={123} />
      </>
    );
  }
}
