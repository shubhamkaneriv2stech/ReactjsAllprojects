import React from "react";

import axios from "axios";

import base_url from "../../Service/ApiBoot";

export const FetchingStudentList = (setUsers, setLoader, setErrorMsg, api) => {
  let mounted = true;

  const fetchUser = () => {
    axios
      .get(api)
      .then(function (response) {
        if (mounted) {
          setUsers(response.data);
          console.log(response.data);
          setLoader(false);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setErrorMsg("Data Not Available");

        setLoader(false);
      });
  };
  fetchUser();
  return function cleanup() {
    mounted = false;
  };
};
