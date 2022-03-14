import React, { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import base_url from "../Service/ApiBoot";

import {
  Card,
  Container,
  Breadcrumb,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const StudentDetail = (props) => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  console.log(id);
  //State for the ErrorMsg When Something Wrong In Fetching Api Data
  const [errorMsg, setErrorMsg] = useState(null);
  const obj = props.location.myCustomProps;
  console.log(obj);
  console.log(props);

  const [spinner, setspinner] = useState(true);
  // useEffect(() => {
  //   setUser(props.location.myCustomProps);
  //   setTimeout(() => {
  //     setspinner(false);
  //   }, 1000);
  // }, [props.location.myCustomProps]);

  useEffect(() => {
    let mounted = true;
    const fetchUser = () => {
      axios
        .get(`${base_url}/${id}`)
        .then(function (response) {
          if (mounted) {
            setUser(response.data);
            console.log(response.data);
            console.log("zscz");
            setspinner(false);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setErrorMsg("Student data Not Found");

          setspinner(false);
        });
    };
    fetchUser();
    return function cleanup() {
      mounted = false;
    };
  }, [id]);
  return (
    <Container>
      {spinner ? (
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
      ) : (
        <>
          <Container fluid>
            <Breadcrumb
              aria-label="breadcrumb"
              style={{
                marginBottom: "30px",
                paddingLeft: "10px",
                marginTop: "35px",
              }}
            >
              <Link to="/studentList" style={{ textDecoration: "none" }}>
                Back to Student List
              </Link>
            </Breadcrumb>
          </Container>

          <div style={{ paddingLeft: "13px" }}>
            <div>
              <Card
                style={{
                  width: "80rem",
                  marginLeft: "13px",
                  backgroundColor: "rgb(245, 240, 240)",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "left",
                      marginBottom: "15px",
                      fontSize: "32px",
                    }}
                  >
                    Student Details
                  </Card.Title>
                  <div className="text-center text-danger"> {errorMsg}</div>
                  {user && (
                    <>
                      <Row>
                        <Col sm={3}>
                          <h6 className="mb-0"> Name</h6>
                        </Col>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {user.name}
                        </div>
                      </Row>
                      <hr />
                      <Row>
                        <Col sm={3}>
                          <h6 className="mb-0">Address</h6>
                        </Col>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {user.address}
                        </div>
                      </Row>
                      <hr />
                      <Row>
                        <Col sm={3}>
                          <h6 className="mb-0">Age</h6>
                        </Col>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {user.age}
                        </div>
                      </Row>
                      <hr />
                      <Row>
                        <Col sm={3}>
                          <h6 className="mb-0">Email</h6>
                        </Col>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {user.email}
                        </div>
                      </Row>
                      <hr />
                      <Row>
                        <Col sm={3}>
                          <h6 className="mb-0">Roll No</h6>
                        </Col>
                        <div
                          className="col-sm-9 text-secondary"
                          style={{
                            textAlign: "left",
                          }}
                        >
                          {user.rollNo}
                        </div>
                      </Row>
                    </>
                  )}
                </Card.Body>
              </Card>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default StudentDetail;
