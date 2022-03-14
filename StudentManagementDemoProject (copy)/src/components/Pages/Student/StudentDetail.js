import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import base_url from "../../../Service/ApiBoot";
import { FetchingStudentList } from "../../common/AxiosFunction";
import {
  Card,
  Container,
  Breadcrumb,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  useEffect(() => {
    // let mounted = true;
    // const CancelToken = axios.CancelToken;
    // const source = CancelToken.source();
    // const fetchUser = () => {
    //   axios
    //     .get(`${base_url}/rest/students/${id}`)
    //     .then(function (response) {
    //       if (mounted) {
    //         setUser(response.data);
    //         console.log(response.data);
    //         setspinner(false);
    //       }
    //     })
    //     .catch(function (error) {
    //       if (axios.isCancel(error)) {
    //         console.log("Request canceled", error.message);
    //       } else {
    //         // handle error
    //         console.log(error);
    //         setErrorMsg("Student data Not Found");
    //       }
    //       setspinner(false);
    //     });
    // };
    // fetchUser();
    // return function cleanup() {
    //   mounted = false;
    // };

    const api = `${base_url}/rest/students/${id}`;
    const source = axios.CancelToken.source();
    const details = FetchingStudentList(
      setUser,
      setspinner,
      setErrorMsg,
      api,
      source
    );
    console.log(details);
    console.log(user);
  }, [id]);

  const notify = () =>
    toast.success(`Fetching Data Sucessfully Of user ${user.name}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <Container fluid>
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
          <Breadcrumb
            aria-label="breadcrumb"
            style={{
              marginBottom: "30px",
              padding: "10px",

              marginLeft: "4px",
            }}
          >
            <Link
              to="/table"
              style={{ textDecoration: "none", color: "black" }}
            >
              Back to Student List
            </Link>
          </Breadcrumb>

          <div>
            <Card
              style={{
                width: "93rem",
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
                    <div style={{ display: "none" }}>{notify()}</div>
                    <Row>
                      <Col sm={3}>
                        <h6 className="mb-0"> Name</h6>
                      </Col>
                      <Col sm={9} className="text-secondary text-left ">
                        {user.name}
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={3}>
                        <h6 className="mb-0">Address</h6>
                      </Col>
                      <Col sm={9} className="text-secondary text-left ">
                        {user.address}
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={3}>
                        <h6 className="mb-0">Age</h6>
                      </Col>
                      <Col sm={9} className="text-secondary text-left ">
                        {user.age}
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={3}>
                        <h6 className="mb-0">Email</h6>
                      </Col>
                      <Col sm={9} className="text-secondary text-left ">
                        {user.email}
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={3}>
                        <h6 className="mb-0">Roll No</h6>
                      </Col>
                      <Col sm={9} className="text-secondary text-left ">
                        {user.rollNo}
                      </Col>
                    </Row>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

export default StudentDetail;
