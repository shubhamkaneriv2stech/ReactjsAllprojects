import React, { Component } from "react";

export default class Image extends Component {
  render() {
    if (this.props.img === "NoImage") {
      throw new Error(" Image Not Found");
    }

    return <img src={this.props.img} alt="My pic" />;
  }
}
