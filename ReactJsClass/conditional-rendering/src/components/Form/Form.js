import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const getFirstName = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const getLastName = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const getEmail = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstName"
        value={user.firstName}
        onChange={getFirstName}
      />
      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastName"
        value={user.lastName}
        onChange={getLastName}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={getEmail}
      />
       
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        onChange={handleInputChange}
      />
       <label htmlFor="male">Male</label> 
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        onChange={handleInputChange}
      />
       <label htmlFor="female">FeMale</label>
      <input type="submit" />
      <p> FirstName is {user.firstName}</p>
      <p> Last Name is{user.lastName}</p>
      <p> Email is{user.email}</p>
    </div>
  );
};

export default Form;
