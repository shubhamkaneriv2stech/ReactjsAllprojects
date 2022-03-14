import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/Index";
import {Use}

import "./todo.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src={todo} alt="todologo" />
          <figcaption>Add Your List Here ✌</figcaption>
        </figure>

        <div className="addItems">
          <input
            type="text"
            placeholder="✍ Add Items..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i className="fa fa-plus add-btn" title="Add Item"></i>
        </div>

        <div className="showItems"></div>

        {/* clear all button  */}
        <div className="showItems">
          <button className="btn effect04" data-sm-link-text="Remove All">
            <span> CHECK LIST </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
