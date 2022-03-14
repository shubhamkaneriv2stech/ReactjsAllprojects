import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import base_url from "../../../Service/ApiBoot";
import { IconContext } from "react-icons";
const StudentList = () => {
  console.log(" api calling");

  //State For Storing JsonPlaceholder Api  data
  const [users, setUsers] = useState(null);
  // State For the Loader Part
  const [loader, setLoader] = useState(true);
  //State for the ErrorMsg When Something Wrong In Fetching Api Data
  const [errorMsg, setErrorMsg] = useState(null);
  //Declaration of APi URL

  //Function For Getting Api Data And Setting in users State

  //Used for All Clean up When Component is Unmounted And mounted
  useEffect(() => {
    let mounted = true;
    const fetchUser = () => {
      axios
        .get(`${base_url}/rest/students`)
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
  }, []);
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
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>RollNo</th>
                            <th>Name</th>

                            <th>Address</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th className="text-center">View</th>
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
                                  <Link
                                    to={{
                                      pathname: `/table/${val.rollNo}`,
                                      myCustomProps: val,
                                    }}
                                  >
                                    <IconContext.Provider
                                      value={{
                                        color: "#ff1f59",
                                        size: "1.5rem",
                                      }}
                                    >
                                      <div className="text-center">
                                        <MdRemoveRedEye />
                                      </div>
                                    </IconContext.Provider>
                                  </Link>
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
    </div>
  );
};

export default StudentList;
