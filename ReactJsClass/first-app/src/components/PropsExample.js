import React from "react";

function PropsExample(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

export default PropsExample;
