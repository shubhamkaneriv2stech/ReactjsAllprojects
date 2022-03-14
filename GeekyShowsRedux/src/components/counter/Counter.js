import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../actions/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.counter);
  const theme = useSelector((state) => state.theme.color);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          marginTop: "400px",
        }}
      >
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ margin: "5px" }}>
          {" "}
          <span style={{ color: theme }}>counter</span> {count}
        </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>{" "}
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increase BY 10
        </button>
      </div>
    </div>
  );
}
