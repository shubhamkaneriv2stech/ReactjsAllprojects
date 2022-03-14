import React, { useState, useEffect, useRef } from "react";
import TableData from "./TableData";
import TableView from "./TableView";
import { Button, Form, Row, Col } from "react-bootstrap";
import Pagination from "../List/Pagination";
const Table = () => {
  console.log(TableData);
  console.log("in The Table Component");
  const [statedata, setState] = useState({
    currentPage: 1,
    pageSize: 5,
  });
  const inputRef = useRef("");
  // useEffect(() => {
  //   setInterval(() => {
  //     setSearchDataOrDefaultData(TableData);
  //   }, 3000);
  // }, []);
  const [searchDataOrDefaultData, setSearchDataOrDefaultData] =
    useState(TableData);

  const handleClick = (e) => {
    setState({
      currentPage: Number(e.target.id),
      pageSize: 5,
    });
  };

  const search = (e) => {
    const searchTerm = inputRef.current.value.toLowerCase();
    setState({
      currentPage: 1,
      pageSize: 5,
    });
    const value = TableData.filter(function (e) {
      return e.first_name.toLowerCase().includes(searchTerm);
    });
    setSearchDataOrDefaultData(value);
  };
  let indexOfLastTodo = statedata.currentPage * statedata.pageSize;
  let indexOfFirstTodo = indexOfLastTodo - statedata.pageSize;
  let currentPosts = searchDataOrDefaultData.slice(
    indexOfFirstTodo,
    indexOfLastTodo
  );

  let id = indexOfFirstTodo;

  return (
    <div>
      <h1 className="mt-2">Table List</h1>
      <Form className="m-3">
        <Row className="justify-content-md-center offset-md-4">
          <Col xs={7}>
            <Form.Control
              id="inlineFormInput"
              placeholder="Search By Name "
              ref={inputRef}
              onChange={search}
            />
          </Col>

          <Col xs={1}>
            <Button variant="success">Search</Button>
          </Col>
        </Row>
      </Form>

      <table className="table table-bordered table-hover table-responsive ">
        <thead className="thead-dark">
          <tr>
            <th style={{ width: 100 }} rowSpan="2">
              Sr No
            </th>
            <th style={{ width: 100 }} rowSpan="2">
              FirstName
            </th>
            <th style={{ width: 100 }} rowSpan="2">
              LastName
            </th>
            <th style={{ width: 100 }} rowSpan="2">
              UserName
            </th>
            <th style={{ width: 100 }} rowSpan="2">
              Gender
            </th>
            <th style={{ width: 100 }} rowSpan="2">
              Date_Of_Birth
            </th>
            <th style={{ width: 100 }} colSpan="4">
              Address
            </th>
            <th style={{ width: 100 }} colSpan="2">
              Subcription
            </th>
          </tr>
          <tr>
            <th style={{ width: 100 }}>City</th>
            <th style={{ width: 100 }}>StreetName</th>
            <th style={{ width: 100 }}>State</th>
            <th style={{ width: 100 }}>Country</th>
            <th style={{ width: 100 }}>Plan</th>
            <th style={{ width: 100 }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <>
            {currentPosts.length > 0 ? (
              currentPosts.map((val) => {
                console.log(val.subscription.status);
                id++;
                let color;
                if (val.subscription.status === "Idle") color = "text-primary";
                else if (val.subscription.status === "Pending")
                  color = "text-warning";
                else if (val.subscription.status === "Blocked")
                  color = "text-danger";
                else if (val.subscription.status === "Active")
                  color = "text-success";
                return <TableView details={val} id={id} color={color} />;
              })
            ) : (
              <tr>
                <td colSpan="8">
                  ...No Data Found This !
                  <strong style={{ color: "red" }}>
                    {inputRef.current.value === ""
                      ? "dfdf"
                      : inputRef.current.value}
                  </strong>
                </td>
              </tr>
            )}
          </>
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "flex-end",
        }}
      >
        <Pagination
          currentPage={statedata.currentPage}
          handleClick={handleClick}
          data={searchDataOrDefaultData}
          pageSize={statedata.pageSize}
          currentPosts={currentPosts}
        />
      </div>
    </div>
  );
};

export default Table;
