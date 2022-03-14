import React, { Component } from "react";
import Marks from "./Marks";

export default class Student extends Component {
  render() {
    console.log("Student -rendered[Child of App]");
    return (
      <div>
        <h1>hello {this.props.name}</h1>
        <Marks />
      </div>
    );
  }
}
