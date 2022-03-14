import React from "react";
import HandleLogin from "./components/HandleLogin";
import CheckLogin from "./components/CheckLogin";
import CourseDetails from "./components/CourseDetails";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <HandleLogin />
      {/* <CheckLogin />
      <CourseDetails /> */}
      <br /> <br />
      <Form />
    </div>
  );
};

export default App;
