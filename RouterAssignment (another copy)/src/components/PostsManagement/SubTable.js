import { useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import CommonReactTable from "../common/CommonReactTable";
import PropTypes from "prop-types";

const SubTable = ({ subRowsColumns, row }) => {
  // State For the Loader Part
  const [loader, setLoader] = useState(true);
  //State For Storing JsonPlaceholder Api  data Comments
  const [comments, setComments] = useState([]);
  //Declaration of APi URL
  let apiUrl = `https://jsonplaceholder.typicode.com/posts`;

  // //Function For Getting Api Data and Storing to States
  const subrowcalling = (row) => {
    axios
      .get(`${apiUrl}/${row.original.id}/comments`)
      .then(function (response) {
        setComments(response.data);
        setLoader(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoader(false);
      });
  };

  return (
    <>
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
          {subrowcalling(row)}
        </>
      ) : (
        <CommonReactTable data={comments} columns={subRowsColumns} />
      )}
    </>
  );
};

export default SubTable;

// PropTypes For the SubTable Component
SubTable.propTypes = {
  subRowsColumns: PropTypes.array,
  row: PropTypes.object,
};
