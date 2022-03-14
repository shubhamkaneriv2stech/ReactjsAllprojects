import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import { MdRemoveRedEye, MdModeEdit, MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import base_url from "../../../Service/ApiBoot";
import { IconContext } from "react-icons";
import {
  deleteStudentData,
  FetchingStudentList,
} from "../../common/AxiosFunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalPopup from "../../common/ModalPopup";
const StudentList = () => {
  console.log(" api calling");

  //State For Storing JsonPlaceholder Api  data
  const [users, setUsers] = useState(null);
  // State For the Loader Part
  const [loader, setLoader] = useState(true);
  //State for the ErrorMsg When Something Wrong In Fetching Api Data
  const [errorMsg, setErrorMsg] = useState(null);
  //Declaration of APi URL
  const [id, setid] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //Function For Getting Api Data And Setting in users State

  //Used for All Clean up When Component is Unmounted And mounted
  useEffect(() => {
    // let mounted = true;
    // const fetchUser = () => {
    //   axios
    //     .get(`${base_url}/rest/students`)
    //     .then(function (response) {
    //       if (mounted) {
    //         setUsers(response.data);
    //         console.log(response.data);
    //         setLoader(false);
    //       }
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //       setErrorMsg("Data Not Available");

    //       setLoader(false);
    //     });
    // };
    // fetchUser();
    // return function cleanup() {
    //   mounted = false;
    // };

    const api = `${base_url}/rest/students`;
    const source = axios.CancelToken.source();
    FetchingStudentList(setUsers, setLoader, setErrorMsg, api, source);

    return () => {
      source.cancel();
    };
  }, [setShow]);

  const notify = () =>
    toast.success("Fetching Data Sucessfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const passData = (rollNo) => {
    console.log("in pass data", rollNo);
    setid(rollNo);

    setShow(true);

    console.log("in pass data", rollNo);
  };
  const onDelete = (studentRollNo) => {
    console.log(" iam on Delete off todo", studentRollNo);
    deleteStudentData(`${base_url}/rest/students/${studentRollNo}`);

    var newstudent = users.filter((item) => {
      return item.rollNo !== studentRollNo;
    });

    setShow(false);
    setUsers(newstudent);
  };

  return (
    <div className="container-parent">
      <Container fluid style={{ padding: 0 }}>
        <Row>
          <Col sm={12} lg={12} xs={12}>
            {loader ? (
              <>
                <div
                  style={{
                    padding: "200px",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  <h1>Loading Data Please wait...</h1>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "block",
                  }}
                >
                  <h1>Student List</h1>
                </div>

                <div style={{ marginTop: "57px" }}>
                  <div className="text-center"> {errorMsg}</div>
                  {users && (
                    <>
                      <div style={{ display: "none" }}>{notify()}</div>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>RollNo</th>
                            <th>Name</th>

                            <th>Address</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((val) => {
                            return (
                              <tr key={val.rollNo}>
                                <td>{val.rollNo}</td>
                                <td>{val.name}</td>
                                <td>{val.address}</td>
                                <td>{val.age}</td>

                                <td>{val.email}</td>
                                <td>
                                  <div className="d-flex justify-content-evenly">
                                    <div>
                                      <Link
                                        to={{
                                          pathname: `/table/${val.rollNo}`,
                                          myCustomProps: val,
                                        }}
                                      >
                                        <IconContext.Provider
                                          value={{
                                            color: "#blue",
                                            size: "1.5rem",
                                          }}
                                        >
                                          <div className="text-center">
                                            <MdRemoveRedEye />
                                          </div>
                                        </IconContext.Provider>
                                      </Link>
                                    </div>
                                    <div>
                                      <Link
                                        to={{
                                          pathname: `/formValidation/${val.rollNo}`,
                                          myCustomProps: val,
                                        }}
                                      >
                                        <IconContext.Provider
                                          value={{
                                            color: "yellow",
                                            size: "1.5rem",
                                          }}
                                        >
                                          <div className="text-center">
                                            <MdModeEdit />
                                          </div>
                                        </IconContext.Provider>
                                      </Link>
                                    </div>
                                    <div>
                                      <IconContext.Provider
                                        value={{
                                          color: "red",
                                          size: "1.5rem",
                                        }}
                                      >
                                        <div className="text-center">
                                          <MdDelete
                                            onClick={() => {
                                              passData(val.rollNo);
                                            }}
                                          />
                                        </div>
                                      </IconContext.Provider>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </>
                  )}
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
      {/* <ToastContainer /> */}
      <ModalPopup
        show={show}
        onDelete={onDelete}
        handleClose={handleClose}
        itemsID={id}
      />
    </div>
  );
};

export default StudentList;
