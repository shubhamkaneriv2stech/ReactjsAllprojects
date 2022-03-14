import React, { Component } from "react";

const army = (Men, shot) => {
  class NewMen extends Component {
    state = {
      gunshots: 0,
    };

    handleGunShots = () => {
      this.setState({ gunshots: this.state.gunshots + shot });
    };
    render() {
      return (
        <Men
          hocgunshots={this.state.gunshots}
          hocgunname="AK47"
          handleGunShots={this.handleGunShots}
          {...this.props}
        />
      );
    }
  }

  return NewMen;
};

export default army;
