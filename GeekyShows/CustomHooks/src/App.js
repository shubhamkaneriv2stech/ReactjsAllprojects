import React from "react";
import useCustomerCounter from "./Custom";

const App = () => {
  const data = useCustomerCounter();
  const data1 = useCustomerCounter();
  return (
    <div>
      <h1>Count Up:{data.count}</h1>

      <button onClick={data.handleIncrement}>Increment</button>

      <h1>Count Up:{data1.count}</h1>

      <button onClick={data1.handleIncrement}>Increment</button>
    </div>
  );
};

export default App;
