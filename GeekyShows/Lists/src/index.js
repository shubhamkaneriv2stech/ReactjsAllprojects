import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

const arrvalues = [12, 23, 13, 33, 321, 21];

ReactDOM.render(<App num={arrvalues} />, document.getElementById("root"));
