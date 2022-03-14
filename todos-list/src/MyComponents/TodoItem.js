import React from "react";

const TodoItem = ({ todo, onDelete, key, toggleTaskCompleted }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <h4>{todo.desc}</h4>
      {/* <h4>{todo.sno}</h4> */}

      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
      <hr />
      {/* <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{todo.title}</td>
            <td>{todo.desc}</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
export default TodoItem;
