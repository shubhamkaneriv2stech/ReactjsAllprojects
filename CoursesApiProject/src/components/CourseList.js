import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import base_url from "../Service/ApiBoot";
import { IconContext } from "react-icons";

const CourseList = () => {
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
        .get(base_url)
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
    <Container style={{ marginTop: "40px" }}>
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
          <div className="text-center"> {errorMsg}</div>
          {users && (
            <>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <h1 style={{ color: "red", marginBottom: "50px" }}>
                    Student List
                  </h1>
                </Col>
              </Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>

                    <th>Description</th>

                    <th className="text-center">View</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((val) => {
                    return (
                      <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.description}</td>

                        <td>
                          <Link
                            to={{
                              pathname: `/${val.id}`,
                              myCustomProps: val,
                            }}
                          >
                            <IconContext.Provider
                              value={{
                                color: "blue",
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
        </>
      )}
    </Container>
  );
};

export default CourseList;
