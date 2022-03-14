import React from "react";

const Student = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Button Clicked functional");
  };
  return (
    <div>
      <h1>your roll no is{props.rollNo}</h1>
      <a href="http://www.google.com" onClick={handleClick}>
        Click me
      </a>
    </div>
  );
};

export default Student;
