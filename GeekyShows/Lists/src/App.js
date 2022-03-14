import React, { useState } from "react";
import User from "./User";

const App = (props) => {
  const arr = [10, 20, 39, 74, 23];

  let shu = {
    users: [
      {
        id: 121,
        name: "shubham",
        password: "sddda",
      },
      { id: 122, name: "sai", password: "sdddasadasd" },
      { id: 125, name: "eajjsa", password: "sdddasahhdsa" },
    ],

    isLoggedIn: false,
  };

  return (
    <div>
      <ul>
        {props.num.map((num) => (
          <User key={num} value={num} />
        ))}
      </ul>

      {/* {shu.users.map((user) => {
        return (
          <h1 key={user.id}>
            id :{user.id} Name: {user.name} Password :{user.password}
          </h1>
        );
      })} */}
    </div>
  );
};

export default App;
