import React, { useContext } from "react";
import { BookContext } from "./BookContext";

const Navbar = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <div>
      <nav
        style={{
          height: "40px",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Books: {books.length}
      </nav>
    </div>
  );
};

export default Navbar;
