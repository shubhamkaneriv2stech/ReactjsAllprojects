import React, { Component } from "react";

const India = ["PUNE", "MUMBAI", "DELHI"];
const USA = ["LOS ANGELS", "NEW JERSEY", "NEW YORK"];
const UK = ["LONDON", "BRISTOL", "LIVERPOOL"];

let type = null;

let options = null;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      gender: "",
      isActive: false,
      city: "",
      country: "",
    };
    this.details = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  }

  handleSubmit(event) {
    this.details = (
      <div>
        <p>First Name is:{this.state.firstName}</p>
        <p>Last Name is:{this.state.lastName}</p>
        <p>Email :{this.state.email}</p>
        <p>Password: {this.state.password}</p>
        <p>Mobile: {this.state.mobile}</p>
        <p>Gender: {this.state.gender}</p>
        <p>CheckBox: {this.state.isActive ? "Yes" : "No"}</p>
        <p>Country: {this.state.country}</p>
        <p>City: {this.state.city}</p>
      </div>
    );
    event.preventDefault();
  }
  render() {
    if (this.state.country === "India") {
      type = India;
    } else if (this.state.country === "USA") {
      type = USA;
    } else if (this.state.country === "UK") {
      type = UK;
    }

    if (type) {
      options = type.map((el) => <option key={el}>{el}</option>);
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fname">FirstName</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="lname">LastName</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            maxLength="10"
            value={this.state.mobile}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            maxLength="12"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="">Gender:- </label>
          <input
            type="radio"
            name="gender"
            id="male"
            // checked={this.state.gender === "male"}
            value="male"
            defaultChecked
            onChange={this.handleChange}
          />
          <label htmlFor="">Male</label>
          <input
            type="radio"
            name="gender"
            checked={this.state.gender === "female"}
            value="female"
            id="female"
            onChange={this.handleChange}
          />
          <label htmlFor="">FeMale</label>
          <br />
          <br />
          <label htmlFor="">Are you Active?</label>
          <input
            type="checkbox"
            id="status"
            name="isActive"
            checked={this.state.isActive}
            value={true}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <div>
            <select name="country" onChange={this.handleChange}>
              <option>Choose Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
          <div>
            <select name="city" onChange={this.handleChange}>
              <option>Choose City</option>
              {options}
            </select>
          </div>

          <input type="submit" value="Submit" />
        </form>
        <p>First Name is:{this.state.firstName}</p>
        <p>Last Name is:{this.state.lastName}</p>
        <p>Email :{this.state.email}</p>
        <p>Password: {this.state.password}</p>
        <p>Mobile: {this.state.mobile}</p>
        <p>Gender: {this.state.gender}</p>
        <p>CheckBox: {this.state.isActive ? "Yes" : "No"}</p>
        <p>Country: {this.state.country}</p>
        <p>City: {this.state.city}</p>
        <p> this is new</p>
        {this.details}
      </div>
    );
  }
}
