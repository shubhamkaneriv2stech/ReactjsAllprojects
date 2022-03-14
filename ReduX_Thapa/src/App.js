import React from "react";
import { Button, Container } from "react-bootstrap";

import { incNumber, decNumber, mulNumber, divNumber } from "./Actions/Index";

import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const muldiv = useSelector((state) => state.mulDiv);
  const dispatch = useDispatch();
  return (
    <>
      <Container className="text-center m-5" style={{ marginLeft: "750px" }}>
        <h1>Increment / Decrement </h1>

        <p>Using React Redux</p>

        <Button onClick={() => dispatch(decNumber())}> - </Button>
        <input type="text" value={myState} />

        <Button onClick={() => dispatch(incNumber(5))}> + </Button>
      </Container>
      <Container className="text-center m-5" style={{ marginLeft: "750px" }}>
        <h1>MUltiplication / Division </h1>

        <p>Using React Redux</p>

        <Button onClick={() => dispatch(divNumber())}> / </Button>
        <input type="text" value={muldiv} />

        <Button onClick={() => dispatch(mulNumber(5))}> * </Button>
      </Container>
    </>
  );
};

export default App;
