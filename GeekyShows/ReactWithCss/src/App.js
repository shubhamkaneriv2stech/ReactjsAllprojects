import React, { useState } from "react";

const App = () => {
  // const btnStyle = {
  //   color: "blue",
  //   backgroundColor: "orange",
  // };

  // const txtc = {
  //   color: "blue",
  // };
  // const txts = {
  //   fontSize: "80px",
  // };

  const [color, setColor] = useState({
    color: "blue",
    backgroundColor: "orange",
  });
  const clickHandler = () => {
    setColor({
      color: "red",
      backgroundColor: "aqua",
    });
  };

  return (
    <>
      <button style={color} onClick={clickHandler}>
        Button
      </button>

      {/* <h1 style={{ ...txtc, ...txts }}>hello shubham</h1> */}
    </>
  );
};

export default App;
