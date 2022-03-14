import React, { useState } from "react";
import { changeTextColor } from "./themeSlice";
import { useSelector, useDispatch } from "react-redux";
const Theme = () => {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeTextColor(color));
        }}
      >
        Change text color
      </button>{" "}
    </div>
  );
};

export default Theme;
