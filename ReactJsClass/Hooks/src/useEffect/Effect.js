import React, { useState, useEffect } from "react";

const Effect = () => {
  const [render, setRender] = useState(0);
  const [doNotRender, setNoRender] = useState(0);

  useEffect(() => console.log("Render", [render]));
  return (
    <div>
      <p>{render}</p>
      <button onClick={() => setRender((r) => r + 1)}>Re-render</button>

      <p>{doNotRender}</p>
      <button onClick={() => setNoRender((nr) => nr + 1)}>No-render</button>
    </div>
  );
};

export default Effect;
