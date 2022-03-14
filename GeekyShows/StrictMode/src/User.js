import React, { Component } from "react";

export default class User extends Component {
  componentWillMount() {
    console.log("User Component Will Mount");
  }
  render() {
    return (
      <div>
        <h1>Hello Shubham</h1>
      </div>
    );
  }
}
