import React from "react";
import User from "./User";
import Style from "./App.module.css";

const App = () => {
  return (
    <div>
      <h1 className={Style.txt}>Hello App</h1>
      <User />
    </div>
  );
};

export default App;
