import React, { useState } from "react";
import Guest from "./Guest";
import User from "./User";

const App = (props) => {
  // const isRegistered = props.consumer;

  // const primeMember = props.primeMember;

  const [isLoggedIN, setIsLoggedIN] = useState(false);

  const isLogged = () => {
    console.log("User Logged");
    setIsLoggedIN(true);
  };
  const isLoggedOut = () => {
    console.log("User Logged Out");
    setIsLoggedIN(false);
  };
  let consumer;
  //   if (isLoggedIN) {
  //     consumer = <User name="Shubham" isLoggedOut={isLoggedOut} />;
  //   } else {
  //     consumer = <Guest isLoggedIN={isLogged} />;
  //   }

  return (
    <div>
      {consumer}

      {isLoggedIN ? (
        <User name="Shubham" isLoggedOut={isLoggedOut} />
      ) : (
        <Guest isLoggedIN={isLogged} />
      )}
    </div>
  );
  //   return (
  //     <>
  //       {/*
  //   {isRegistered ? <User /> : <Guest />}
  //    */}

  //       <h1>Welcome in Amazon</h1>
  //       {/* {primeMember && <User />} */}
  //     </>
  //   );
};

export default App;
