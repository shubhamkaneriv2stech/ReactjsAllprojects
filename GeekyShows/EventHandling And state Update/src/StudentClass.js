import React, { Component } from "react";

export default class StudentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shubham",
      rollNo: this.props.rollNo,
    };
  }

  handleClick = () => {
    console.log("Button Clicked", this);

    //this.setState({ name: "Saurabh", rollNo: 120 });

    this.setState((state, props) => {
      console.log(state);
      console.log(state.name);
      console.log(state.rollNo);
      console.log(props);
      console.log(props.rollNo);
    });
  };

  render() {
    return (
      <div>
        <h1>
          Hello Event {this.state.name} roll No is {this.state.rollNo}
        </h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
