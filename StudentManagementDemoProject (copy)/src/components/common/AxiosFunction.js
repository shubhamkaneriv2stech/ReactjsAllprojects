import axios from "axios";

export const FetchingStudentList = (
  setUsers,
  setLoader,
  setErrorMsg,
  api,
  source
) => {
  const fetchUser = async () => {
    console.log(source);

    try {
      const response = await axios.get(api, {
        cancelToken: source.token,
      });
      setUsers(response.data);
      console.log(response.data);
      setLoader(false);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error);
        setUsers(null);
      } else {
        console.log(error);
        setErrorMsg("Student data Not Found");
        setLoader(false);
      }
    }
  };

  fetchUser();

  // const fetchUser = () => {
  //   const source = axios.CancelToken.source();
  //   axios
  //     .get(api)
  //     .then(function (response) {
  //       if (mounted) {
  //         setUsers(response.data);
  //         console.log(response.data);
  //         setLoader(false);
  //       }
  //     })
  //     .catch(function (error) {
  //       handle error
  //       console.log(error, " Error");
  //       setErrorMsg("Data Not Available");
  //       if (axios.isCancel(error)) {
  //         console.log("Request canceled", error.message);
  //       } else {
  //          handle error
  //         console.log(error);
  //         setErrorMsg("Student data Not Found");
  //       }

  //       setLoader(false);
  //     });
  // };
  // fetchUser();
  // return function cleanup() {
  //   mounted = false;
  // };
};

//   const fetchUser = () => {
//     const source = axios.CancelToken.source();
//     axios
//       .get(api)
//       .then(function (response) {
//         if (mounted) {
//           setUsers(response.data);
//           console.log(response.data);
//           setLoader(false);
//         }
//       })
//       .catch(function (error) {
//         // handle error
//         // console.log(error, " Error");
//         // setErrorMsg("Data Not Available");
//         if (axios.isCancel(error)) {
//           console.log("Request canceled", error.message);
//         } else {
//           // handle error
//           console.log(error);
//           setErrorMsg("Student data Not Found");
//         }

//         setLoader(false);
//       });
//   };
//   fetchUser();
//   return function cleanup() {
//     mounted = false;
//   };
// };

//useEffect(() => {}, [companies]);

export const SaveStudentData = (values, api, history, setResponse) => {
  console.log(api, values);
  axios
    // .post("http://localhost:8080/token", {
    //   username: "Shubham",
    //   password: "Shubham123",
    // })
    .post(api, values)
    .then(function (response) {
      console.log(response.data);
      setResponse(response);
      // history.push("/table");
    })
    .catch(function (error) {
      console.log(error.response.data);
      // if (error.response) {
      //console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      // }
      // const obj = JSON.parse();
      //setResponse(error.response.data.violations);
    });
};

export const updateStudentData = (values, api, history) => {
  axios
    .put(api, values)
    .then(function (response) {
      console.log(response);
      history.push("/table");
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteStudentData = (api) => {
  axios
    .delete(api)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
