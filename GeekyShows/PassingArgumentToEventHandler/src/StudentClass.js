import React, { Component } from "react";

export default class StudentClass extends Component {
  state = {
    id: 1,
    name: "Shubham",
  };

  handleClick = (id, e) => {
    console.log("Button Clicked id is ", id, e);
  };
  // handleClickArg = (e) => {
  //   this.handleClick(this.state.id, e);
  // };
  render() {
    return (
      <div>
        <h1>Hello Event {this.state.name}</h1>
        {/* <button onClick={this.handleClickArg}>Delete</button> */}

        <button
          onClick={(e) => {
            this.handleClick(this.state.id, e);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
