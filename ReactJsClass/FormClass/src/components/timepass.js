import React, { useState } from "react";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    isActive: false,
    city: "",
    country: "",
  });

  //   const handleInputChange = (e) => {
  //     // const name=e.name;
  //     // const target=e.target;
  //     // const value=target.value;
  //     setUserDetails({
  //       ...userDetails,
  //       [e.target.name]:
  //         e.target.type === "checkbox" ? e.target.checked : e.target.value,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const India = ["PUNE", "MUMBAI", "DELHI"];
  const USA = ["LOS ANGELS", "NEW JERSEY", "NEW YORK"];
  const UK = ["LONDON", "BRISTOL", "LIVERPOOL"];

  let type = null;

  let options = null;

  if (userDetails.country === "India") {
    type = India;
  } else if (userDetails.country === "USA") {
    type = USA;
  } else if (userDetails.country === "UK") {
    type = UK;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fname">FirstName</label>
        <input
          type="text"
          id="fname"
          name="firstName"
          value={userDetails.firstName}
          onChange={handleSubmit}
        />
        <br />
        <br />
        <label htmlFor="lname">LastName</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          value={userDetails.lastName}
          onChange={handleSubmit}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userDetails.email}
          onChange={handleSubmit}
        />
        <br />
        <br />
        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          maxLength="10"
          value={userDetails.mobile}
          onChange={handleSubmit}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          maxLength="12"
          value={userDetails.password}
          onChange={handleSubmit}
        />
        <br />
        <br />
        <label htmlFor="">Gender:- </label>
        <input
          type="radio"
          name="gender"
          id="male"
          // checked={userDetails.gender === "male"}
          value="male"
          defaultChecked
          onChange={handleSubmit}
        />
        <label htmlFor="">Male</label>
        <input
          type="radio"
          name="gender"
          checked={userDetails.gender === "female"}
          value="female"
          id="female"
          onChange={handleSubmit}
        />
        <label htmlFor="">FeMale</label>
        <br />
        <br />
        <label htmlFor="">Are you Active?</label>
        <input
          type="checkbox"
          id="status"
          name="isActive"
          checked={userDetails.isActive}
          value={true}
          onChange={handleSubmit}
        />
        <br />
        <br />

        <div>
          <select name="country" onChange={handleSubmit}>
            <option>Choose Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>
        <div>
          <select name="city" onChange={handleSubmit}>
            <option>Choose City</option>
            {options}
          </select>
        </div>

        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit and View Data
        </button>
      </form>

      <p>First Name is:{userDetails.firstName}</p>
      <p>Last Name is:{userDetails.lastName}</p>
      <p>Email :{userDetails.email}</p>
      <p>Password: {userDetails.password}</p>
      <p>Mobile: {userDetails.mobile}</p>
      <p>Gender: {userDetails.gender}</p>
      <p>CheckBox: {userDetails.isActive ? "Yes" : "No"}</p>
      <p>Country: {userDetails.country}</p>
      <p>City: {userDetails.city}</p>
    </div>
  );
};

export default Form;
