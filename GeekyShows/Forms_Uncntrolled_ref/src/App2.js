import React, { Component } from "react";

export default class App2 extends Component {
  constructor() {
    super();

    this.backRef = null;

    this.setBackRef = (ele) => {
      this.backRef = ele;
    };
  }

  componentDidMount = () => {
    if (this.backRef) {
      this.backRef.focus();
    }
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Address</label>
            <input
              ref={this.setBackRef}
              type="text"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
