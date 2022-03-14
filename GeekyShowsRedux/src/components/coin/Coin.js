import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Coin = () => {
  const count = useSelector((state) => state.counter.counter);
  const theme = useSelector((state) => state.theme.color);
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {" "}
      <span style={{ color: theme }}>Coin </span> {count}
    </div>
  );
};

export default Coin;
