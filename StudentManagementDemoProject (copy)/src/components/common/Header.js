import React from "react";

import { Col, Container, Row } from "react-bootstrap";
const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} lg={12} xs={12}>
          <nav
            className="navbar justify-content-between"
            style={{
              right: 0,
              left: 0,
              position: "absolute",
              top: 0,
              padding: "12px 12px 12px 292px",
              backgroundColor: "#ff1f59",
              color: "white",
              zIndex: 1,
            }}
          >
            <h1
              style={{ fontSize: "25px", color: "white", padding: "0px 25px" }}
            >
              Dashboard
            </h1>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
