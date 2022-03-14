import React, { Component } from "react";
import { Provider } from "./Context";
import User from "./User";

export default class App extends Component {
  state = {
    name: "Shubham",
    value: 10,
  };

  handleClickContext = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const contextValue = {
      data: this.state,
      handleClick: this.handleClickContext,
    };
    console.log(contextValue);
    return (
      <div>
        <Provider value={contextValue}>
          <User />
        </Provider>
      </div>
    );
  }
}
