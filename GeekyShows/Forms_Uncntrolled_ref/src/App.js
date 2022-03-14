import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.textInput = React.createRef();
  }

  componentDidMount = () => {
    // console.log("Component Did Mount", this.textInput.current);
    this.textInput.current.focus();
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.textInput.current.value);
    this.setState({ value: this.textInput.current.value });
  };

  render() {
    return (
      <div className="container">
        <h2>You typed value: {this.state.value}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              ref={this.textInput}
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
