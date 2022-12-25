import React from "react";
import AdminTodoItem from "./AdminTodoItem";
import classes from "./AdminTodos.module.css";
const AdminTodos = () => {
  return (
    <div className={"d-flex " + classes.todos} style={{ gap: "10px" }}>
      <AdminTodoItem />
      <AdminTodoItem />
    </div>
  );
};

export default AdminTodos;
