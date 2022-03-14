import React from "react";
import JSX from "./JSX";
import Student from "./Student";
import StudentClassExample from "./StudentClassExample";

const App = () => {
  return (
    <>
      <Student name="Shubham" rollNo={30 + 2} />
      <StudentClassExample name="Saurabh" rollNo={30 + 5} />
      <JSX />
    </>
  );
};

export default App;
