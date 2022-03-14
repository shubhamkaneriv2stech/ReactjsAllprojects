import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "",
    textArea: "",
    email: "",
    password: "",
  };
  handleChnage = (e) => {
    // this.setState({ textArea: e.target.value.toUpperCase().substr(0, 100) });

    this.setState({ [e.target.name]: e.target.value });
    // const value =
    //   e.target.name === "password"
    //     ? e.target.value.toUpperCase().substr(0, 10)
    //     : e.target.value;
    // this.setState({ [e.target.name]: value });
    // console.log(e.target.value);
  };

  handleSubmit = (e) => {
    console.log(e.target[0].value);
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChnage}
                id="name"
                name="name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="textArea">Textarea</label>
              <textarea
                className="form-control "
                id="textArea"
                name="textArea"
                value={this.state.textArea}
                onChange={this.handleChnage}
                placeholder="Required example textarea"
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChnage}
                id="email"
                name="email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChnage}
                id="password"
                name="password"
              />
            </div>
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
