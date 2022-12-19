import React from "react";
import classes from "./AdminTodoItem.module.css";
const AdminTodoItem = () => {
  return (
    <div className={classes.todo}>
      <div
        className={
          classes.todoControls +
          " d-flex justify-content-between align-items-start"
        }
      >
        <small>27 Nov, 2022</small>
        <div className="d-flex" style={{ gap: "4px" }}>
          <div>Ed</div>
          <div>Cl</div>
        </div>
      </div>
      <div>
        <b>Title:</b>
      </div>
      <div>
        <small>
          <b> Add New Students. </b>
        </small>
      </div>
      <div style={{ textDecoration: "underline" }}>Description</div>
      <div>
        <small>
          Add new students of fall 2022 into the system and report director
        </small>
      </div>
    </div>
  );
};

export default AdminTodoItem;
