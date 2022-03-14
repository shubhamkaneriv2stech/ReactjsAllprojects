import React, { Component } from "react";
import Army from "./WithArm";
class Shubham extends Component {
  render() {
    return (
      <div>
        <h2>Camp :{this.props.camp}</h2>
        <h3 onMouseOver={this.props.handleGunShots}>
          Shubham {this.props.hocgunname} Gunshots :-{this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}
export default Army(Shubham, 10);
