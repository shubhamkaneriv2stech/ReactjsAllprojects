import React, { Component } from "react";

export default class Student extends Component {
  // state = {
  //   name: "shubham",
  //   rollNO: this.props.rollNo,
  // };

  constructor(props) {
    super(props);

    this.state = {
      name: "shubham",
      rollNO: this.props.rollNo,
    };
  }

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name} your Roll No is {this.state.rollNO}
        </h1>
        <h1>Roll No {this.state.rollNO}</h1>
      </div>
    );
  }
}
