import React, { Component } from "react";

export default class ThirdComponent extends Component {
  constructor(props) {
    console.log("inside Constructor");
    super(props);

    this.state = { Counter: 0 };

    this.increment = () => this.setState({ Counter: this.state.Counter + 1 });

    this.decrement = () => this.setState({ Counter: this.state.Counter - 1 });
  }

  componentDidMount() {
    console.log("Component did Mount Or has Been Mounted");
    console.log(
      "-------------------------------------------------------------------------------"
    );
  }

  shouldComponentUpdate(nextprops) {
    return true;
  }
  componentDidUpdate() {
    console.log("component did Updated");
    console.log(
      "=============================================================================================="
    );
  }

  componentWillUnmount() {
    console.log("component will unmount Or Remove ");
    console.log(
      "=============================================================================================="
    );
  }

  render() {
    console.log("rendered");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>Decremrnt</button>
        <div>counter :{this.state.Counter}</div>
      </div>
    );
  }
}
