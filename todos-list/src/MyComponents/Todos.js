import React from "react";
import TodoItem from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>
      <h4 className="text-center">Total no of todos {props.todos.length}</h4>
      <br />

      {props.todos.length === 0
        ? "No Todos To display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );

            /* return (
          <div>
            <TodoItem todo={todo} />
            <button className="btn btn-sm btn-danger"> Delete</button>
          </div>
        ); */
          })}
    </div>
  );
};
