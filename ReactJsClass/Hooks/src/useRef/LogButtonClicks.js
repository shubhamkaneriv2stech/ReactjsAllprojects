import React, { useRef, useState } from "react";

const LogButtonClicks = () => {
  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log(`clicked ${count} times`);

    setCount(count + 1);
  };

  //   const handleClick = () => {
  //     countRef.current++;
  //     console.log(`clicked ${countRef.current} times`);
  //   };
  console.log("component Rendered");
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default LogButtonClicks;
