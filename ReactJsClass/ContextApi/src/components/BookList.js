import React, { useContext } from "react";
import Book from "./Book";
import { BookContext } from "./BookContext";

const BookList = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div>
      {books.length > 0 ? (
        books.map((book, id) => {
          console.log(books);

          return <Book book={book} />;
        })
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
};

export default BookList;
