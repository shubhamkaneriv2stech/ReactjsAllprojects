import React, { Component } from "react";
import { Consumer } from "./Context";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h1>Guest Component</h1>
        <Consumer>
          {(value) => (
            <div>
              <h1>
                {value.data.name} : {value.data.value}
              </h1>

              <button className="btn btn-primary" onClick={value.handleClick}>
                change
              </button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
