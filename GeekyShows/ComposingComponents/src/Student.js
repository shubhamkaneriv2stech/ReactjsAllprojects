import React from "react";
import "./JSX.css";
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <h1>Your Roll No {props.rollNo}</h1>
    </>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,

  rollNo: PropTypes.number,
};

Student.defaultProps = { name: "Default valuse" };

export default Student;
