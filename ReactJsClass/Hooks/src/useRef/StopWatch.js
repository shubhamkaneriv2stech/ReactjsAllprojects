import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(0);

  console.log(timerRef.current + " it is ");

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}> Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default StopWatch;
