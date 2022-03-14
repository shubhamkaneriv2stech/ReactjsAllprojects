import React from "react";

import ModalPopup from "./ModalPopup";
const TodoTable = ({
  ourData,
  onDelete,
  onEdit,
  editItem,
  show,
  handleClose,
  passData,
  id,
  title,
}) => {
  console.log(ourData, "shubham");
  console.log(id, "shubham id");
  console.log(title, "shubham tittle");
  return (
    <div>
      <br />
      <table className="table table-bordered table-hover table-responsive ">
        <thead className="thead-dark">
          <tr>
            <th style={{ width: 70 }}>Sr No</th>
            <th style={{ width: 200 }}>Title</th>
            <th style={{ width: 300 }}>Description</th>
            <th style={{ width: 200 }}>Status</th>
            <th style={{ width: 300 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ourData.length > 0 ? (
            ourData.map((items, i) => {
              return (
                <tr
                  key={items.id}
                  className={editItem === items.id ? "bg-info" : ""}
                >
                  <td>{i + 1}</td>
                  <td>{items.title}</td>
                  <td>{items.description}</td>
                  <td>
                    {items.status === "Todo" && (
                      <strong className="text-primary">{items.status}</strong>
                    )}
                    {items.status === "Inprogress" && (
                      <strong className="text-warning">{items.status}</strong>
                    )}
                    {items.status === "Done" && (
                      <strong className="text-success">{items.status}</strong>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning "
                      onClick={(e) => {
                        onEdit(items.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger m-1"
                      onClick={(e) => {
                        passData(items.id, items.title);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">...No Data !</td>
            </tr>
          )}
        </tbody>
      </table>
      <ModalPopup
        show={show}
        onDelete={onDelete}
        handleClose={handleClose}
        title={title}
        itemsID={id}
      />
    </div>
  );
};

export default TodoTable;
