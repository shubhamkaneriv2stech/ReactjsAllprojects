import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div class="site-footer">
        <Container>
          <Row>
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <Link to="/"> V2Stech Home</Link>.
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
