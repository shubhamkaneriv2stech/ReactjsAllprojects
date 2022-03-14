import React, { useState } from "react";
import img1 from "../img/saurabh pic.jpeg";
import img2 from "../img/shubham gate.jpg";

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
  });

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  //   const handleSubmit = (e) => {
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

    console.log(userDetails);
  };

  let image;

  if (userDetails.gender === "male") {
    image = (
      <img src={img1} style={{ height: "200px", width: "200px" }} alt="" />
    );
  } else if (userDetails.gender === "female") {
    image = (
      <img src={img2} style={{ height: "200px", width: "200px" }} alt="" />
    );
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
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="lname">LastName</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          value={userDetails.lastName}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userDetails.email}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="">Gender:- </label>
        <input
          type="radio"
          name="gender"
          id="male"
          checked={userDetails.gender === "male"}
          value="male"
          // defaultChecked
          onChange={handleInputChange}
        />
        <label htmlFor="">Male</label>
        <input
          type="radio"
          name="gender"
          checked={userDetails.gender === "female"}
          value="female"
          id="female"
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
        <br /> <br />
        <label htmlFor="city"> Select City:</label>
        <select
          name="city"
          id="city"
          value={userDetails.city}
          onChange={handleInputChange}
        >
          <option value="pune">Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="latur">Latur</option>
          <option value="Nashik">Nashik</option>
          <option value="dhule">Dhule</option>
        </select>
        <br /> <br />
        <button type="submit" onClick={handleInputChange}>
          Submit and View Data
        </button>
      </form>
      {image}
      <p>First Name is:{userDetails.firstName}</p>

      <p>Last Name is:{userDetails.lastName}</p>
      <p>Email :{userDetails.email}</p>
      <p>Password: {userDetails.password}</p>
      <p>Mobile: {userDetails.mobile}</p>
      <p>Gender: {userDetails.gender}</p>
      <p>CheckBox: {userDetails.isActive ? "Yes" : "No"}</p>
      <p>City: {userDetails.city}</p>
    </div>
  );
};

export default Form;
