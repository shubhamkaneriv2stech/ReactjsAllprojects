import React, { useState, useRef } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Pagination from "./Pagination";
import Sdata from "./Sdata";

const List = () => {
  const [state, setState] = useState({
    currentPage: 1,
    pageSize: 5,
  });

  const [searchValue, setSearchValue] = useState(Sdata);

  const inputRef = useRef(null);

  const handleClick = (e) => {
    setState({
      currentPage: Number(e.target.id),
      pageSize: 5,
    });
  };

  const search = () => {
    console.log(inputRef.current.value);
    const searchTerm = inputRef.current.value.toLowerCase();
    setState({
      currentPage: 1,
      pageSize: 5,
    });
    const value = Sdata.filter(function (e) {
      return e.name.toLowerCase().includes(searchTerm);
    });
    setSearchValue(value);
  };

  let indexOfLastTodo = state.currentPage * state.pageSize;
  let indexOfFirstTodo = indexOfLastTodo - state.pageSize;
  let currentPosts = searchValue.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <>
      <Form className="m-5">
        <Row className="justify-content-md-center offset-md-7">
          <Col xs={7}>
            <Form.Control
              id="inlineFormInput"
              placeholder="Search By Name "
              ref={inputRef}
              onChange={search}
            />
          </Col>

          <Col xs={1}>
            <Button variant="success" onClick={search}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="clearfix">
        {currentPosts.length > 0 ? (
          currentPosts.map((val) => {
            return <Card details={val} key={val.id} />;
          })
        ) : (
          <h3>
            No data Found this{" "}
            <strong style={{ color: "red" }}>{inputRef.current.value}</strong>
          </h3>
        )}
      </div>

      <div
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "flex-end",
        }}
      >
        <Pagination
          currentPage={state.currentPage}
          handleClick={handleClick}
          data={searchValue}
          pageSize={state.pageSize}
        />
      </div>
    </>
  );
};

export default List;
