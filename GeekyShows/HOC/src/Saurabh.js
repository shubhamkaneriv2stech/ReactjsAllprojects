import React, { Component } from "react";
import Army from "./WithArm";

class Saurabh extends Component {
  render() {
    return (
      <div>
        <h2>Camp :{this.props.camp}</h2>
        <h3 onMouseOver={this.props.handleGunShots}>
          Saurabh {this.props.hocgunname} Gunshots :-{this.props.hocgunshots}
        </h3>
      </div>
    );
  }
}

export default Army(Saurabh, 20);
