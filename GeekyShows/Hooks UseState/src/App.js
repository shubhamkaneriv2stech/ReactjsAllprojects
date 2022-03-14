import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState("Shubham");
  const [roll, setRoll] = useState(105);
  const handleChange = () => {
    setState("Saurabh");
    setRoll(102);
  };

  return (
    <div>
      <h1>
        Hello {state} roll no is {roll}
      </h1>

      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default App;
