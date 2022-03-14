import React, { Component } from "react";

export default class FourthComponent extends Component {
  constructor(props) {
    super(props);

    console.log("inside Constructor");
    this.state = {
      data: "Shubham",
    };
  }

  getData() {
    setTimeout(() => {
      console.log("our Data is fetched -- component did mount");
      this.setState({
        data: "Welcome to React World... Fourth World",
      });
    }, 1500);
  }

  componentDidMount() {
    this.getData();
  }

  componentWillMount() {
    console.log("First This is Called --component will mount");
  }

  componentWillUnmount() {
    console.log("Component will unmount...");
  }

  render() {
    return (
      <div>
        {this.state.data}
        {/* <Link to="/third">Third Component</Link> */}
      </div>
    );
  }
}
