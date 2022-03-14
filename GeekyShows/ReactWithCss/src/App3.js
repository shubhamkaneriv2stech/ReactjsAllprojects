import React from "react";
import "./App3.css";
import User from "./User";

const App3 = () => {
  let style = false;
  return (
    <div>
      <h1 className="txtb">Helo app3</h1>

      <User name="shubham" rang={style ? "txtb" : "txtg"} />
    </div>
  );
};

export default App3;
