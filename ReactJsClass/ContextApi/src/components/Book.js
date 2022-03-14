import React from "react";

const Book = (props) => {
  return (
    <div className="container">
      <br />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col"> Book price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.book.bookName}</td>
            <td>{props.book.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Book;
