import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      bookName: "XYZ",
      price: 299,
    },

    {
      bookName: "ABC",
      price: 499,
    },
  ]);

  return (
    <div>
      <BookContext.Provider value={[books, setBooks]}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookProvider;
