import React, { useState, useEffect } from "react";

const BasicHooks = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Calling use effect");
  }, [count]);
  const handleDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter :{count}</h1>

      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};

export default BasicHooks;
