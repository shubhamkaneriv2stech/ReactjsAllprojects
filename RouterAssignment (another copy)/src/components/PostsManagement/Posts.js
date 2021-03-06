import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { COLUMNS } from "./Columns";
import { SubRowsColumns } from "./SubRowsColumns";
import CircularProgress from "@material-ui/core/CircularProgress";
import CommonReactTable from "../common/CommonReactTable";
import { useSelector } from "react-redux";

import SubTable from "./SubTable";
const Posts = () => {
  const postsApiData = useSelector((state) => state.postsApiReducer);

  console.log(postsApiData, " api calling");
  console.log(" api calling");
  //Columns For Table
  const columns = useMemo(() => COLUMNS, []);
  const subRowsColumns = useMemo(() => SubRowsColumns, []);
  //State For Storing JsonPlaceholder Api  data
  const [users, setUsers] = useState([]);
  // State For the Loader Part
  const [loader, setLoader] = useState(true);
  //State for the ErrorMsg When Something Wrong In Fetching Api Data
  const [errorMsg, setErrorMsg] = useState(null);
  //Declaration of APi URL
  let apiUrl = `https://jsonplaceholder.typicode.com/posts`;
  //Function For Getting Api Data And Setting in users State

  // Used for All Clean up When Component is Unmounted And mounted
  // useEffect(() => {
  //   let mounted = true;
  //   const fetchUser = () => {
  //     axios
  //       .get(apiUrl)
  //       .then(function (response) {
  //         if (mounted) {
  //           setUsers(response.data);
  //           console.log(response.data);
  //           setLoader(false);
  //         }
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //         setErrorMsg("Data Not Available");

  //         setLoader(false);
  //       });
  //   };
  //   fetchUser();
  //   return function cleanup() {
  //     mounted = false;
  //   };
  // }, []);

  //Passing Row And subRowsColumns to SubTable Component as Props
  const renderRowSubComponent = (row) => {
    return <SubTable subRowsColumns={subRowsColumns} row={row} />;
  };

  return (
    <div className="app">
      <div className="text-center"> {errorMsg}</div>
      {loader ? (
        <>
          <div
            style={{
              padding: "200px",
              color: "red",
              textAlign: "center",
            }}
          >
            <CircularProgress color="secondary" />
            <h1>Loading Data Please wait...</h1>
          </div>
          {setTimeout(() => {
            setLoader(false);
          }, 500)}
        </>
      ) : (
        <>
          {postsApiData && (
            <CommonReactTable
              data={postsApiData}
              columns={columns}
              tableTitle={"Post Management Table"}
              showPagination={false}
              renderRowSubComponent={renderRowSubComponent}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Posts;
// useEffect(() => {
//     const source = axios.CancelToken.source();

//     const fetchUsers = async () => {
//         try {
//             await axios.get("/users", {
//                 cancelToken: source.token,
//             });
//             // ...
//         } catch (error) {
//             if (Axios.isCancel(error)) {
//             } else {
//                 throw error;
//             }
//         }
//     };

//     fetchData();

//     return () => {
//         source.cancel();
//     };
// }, []);
