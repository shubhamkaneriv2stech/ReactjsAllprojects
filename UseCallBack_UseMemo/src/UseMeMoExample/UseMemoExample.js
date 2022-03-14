import React, { useState, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";

const UseMemoExample = () => {
  const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
  const [result, setResult] = useState(0);

  useMemo(() => {
    setResult(numbers.num1 + numbers.num2);
    console.log(result, "Result");
  }, [numbers, result]);
  return (
    <Container>
      <Row style={{ marginLeft: "800px" }}>
        <Col>
          <h2 style={{ marginLeft: "70px" }}>{result}</h2>
          <br />
          <input
            type="text"
            onChange={(e) =>
              setNumbers({ num1: +e.target.value, num2: numbers.num2 })
            }
          />
          <br />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) =>
              setNumbers({ num1: numbers.num1, num2: +e.target.value })
            }
          />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default UseMemoExample;
