import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Marks - Get Derived State from props");
    console.log(props, state);
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mroll < 107) {
      console.log("Mark -ShouldComponentUpdate");
      console.log(nextProps, nextState);
      return true;
    }
    console.log(nextProps, nextState);
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Marks - GetSnapShotBeforeUpdate - It runs Before Update");
    console.log(prevProps, prevState);
    return 45;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("Marks - ComponentDidUpdate -It runs after update");
    console.log(prevProps, prevState, snapShot);
  }

  render() {
    console.log("Marks Rendered");
    return (
      <div>
        <h1>Marks {this.state.mroll}</h1>
      </div>
    );
  }
}
