import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Breadcrumb,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CourseDetail = (props) => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  console.log(id);

  const obj = props.location.myCustomProps;
  console.log(obj);
  console.log(props);

  const [spinner, setspinner] = useState(true);
  useEffect(() => {
    setUser(props.location.myCustomProps);
    setTimeout(() => {
      setspinner(false);
    }, 1000);
  }, [props.location.myCustomProps]);

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
        <div style={{ paddingLeft: "13px" }}>
          <Container fluid>
            <Breadcrumb
              aria-label="breadcrumb"
              style={{
                marginBottom: "30px",
                paddingLeft: "10px",
                marginTop: "35px",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Table
              </Link>
              /{user.title}
            </Breadcrumb>
          </Container>

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
                  Course Details
                </Card.Title>

                <Row>
                  <Col sm={3}>
                    <h6 className="mb-0"> Id</h6>
                  </Col>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {user.id}
                  </div>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <h6 className="mb-0">Title</h6>
                  </Col>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {user.title}
                  </div>
                </Row>
                <hr />
                <Row>
                  <Col sm={3}>
                    <h6 className="mb-0">Description</h6>
                  </Col>
                  <div
                    className="col-sm-9 text-secondary"
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {user.description}
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </Container>
  );
};

export default CourseDetail;
