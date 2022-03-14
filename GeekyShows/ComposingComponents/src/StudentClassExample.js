import React, { Component } from "react";
import "./StudentClassExample.css";

export default class StudentClassExample extends Component {
  render() {
    return (
      <div className="class">
        <h1>Hello {this.props.name}</h1>
        <h1>YOur Roll No {this.props.rollNo}</h1>
      </div>
    );
  }
}
