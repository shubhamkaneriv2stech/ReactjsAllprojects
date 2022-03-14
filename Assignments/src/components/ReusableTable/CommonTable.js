import React from "react";

const CommonTable = ({ data, columns }) => {
  console.log(data);
  console.log(columns);
  return (
    <div>
      <h1>Common table</h1>
      <table className="table table-bordered table-hover table-responsive ">
        <thead className="thead-dark">
          <tr>
            {columns.map((col) => {
              return <th style={{ width: 200 }}> {col.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((rowsItem) => {
            return (
              <tr>
                {columns.map((col) => {
                  return <td> {rowsItem[col.dataIndex]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
