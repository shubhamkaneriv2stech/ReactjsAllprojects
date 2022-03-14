import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import AuthButton from "./Switch/AuthButton";
export default class HandleLogin extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  handleLogin = () => {
    console.log(this.state.isLoggedIn + " in LOgin onclick Function");
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
    console.log(
      this.state.isLoggedIn + " in LOgin onclick Function after Setting"
    );
  };
  handleLogout = () => {
    console.log(this.state.isLoggedIn + " in LOgout Function");
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
    console.log(
      this.state.isLoggedIn + " in LOgout onclick Function after Setting"
    );
  };
  render() {
    let element;

    // if (this.state.isLoggedIn) {
    //   console.log(this.state.isLoggedIn + "------------- in LOgin Function");
    //   element = <Login displayLogin={this.handleLogin} />;
    // } else {
    //   console.log(
    //     this.state.isLoggedIn + "------------------- in LOgout Function"
    //   );
    //   element = <Logout displayLogout={this.handleLogout} />;
    // }

    this.state.isLoggedIn
      ? (element = <Login displayLogin={this.handleLogin} />)
      : (element = <Logout displayLogout={this.handleLogout} />);

    return (
      <>
        {element}
        <Welcome isLoggedIn={this.state.isLoggedIn} />

        <AuthButton isLoggedIn={this.state.isLoggedIn} />
      </>
    );
  }
}
