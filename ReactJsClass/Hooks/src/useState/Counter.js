import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Shubham");

  const [arr, setArr] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [obj, setObj] = useState({});
  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      {count}
      <br />
      {/* <button onClick={handleInc}>Increment</button> */}
      <button onClick={() => setCount((prev) => setCount(prev + 1))}>
        Increment
      </button>

      <br />
      <br />
      {/* <button onClick={handleDec}>Decrement</button> */}

      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
