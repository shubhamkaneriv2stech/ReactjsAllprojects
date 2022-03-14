import React from "react";
import pic from "./download (1).jpg";

const App = () => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/image/download.jpg"}
        alt=""
        srcset=""
      />
      <br />
      <img src={pic} alt="" srcset="" />
    </div>
  );
};

export default App;
