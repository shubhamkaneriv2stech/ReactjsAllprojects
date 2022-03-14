import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import Student from "./Student";

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<Student />, document.getElementById("stu"));

ReactDOM.unmountComponentAtNode(document.getElementById("root"));
