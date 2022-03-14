import React from "react";
import AddNewBook from "./components/AddNewBook";
import BookProvider from "./components/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
//1. create a context with the help of createContext hook
//2. create a provider and consumer component
const App = () => {
  return (
    <div className="App">
      <BookProvider>
        <Navbar />
        <AddNewBook />
        <BookList />
      </BookProvider>
    </div>
  );
};

export default App;
