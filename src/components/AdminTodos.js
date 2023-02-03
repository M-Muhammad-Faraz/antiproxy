import React, { useState } from "react";
import { useData } from "../context/DataProvidor";
import AdminTodoItem from "./AdminTodoItem";
import classes from "./AdminTodos.module.css";
const AdminTodos = ({ working, setWorking }) => {
  const [editingTodo, setEditingTodo] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  const { todos } = useData();
  const handleClose = () => {
    setEditingTodo(false);
  };

  return (
    <>
      <div
        className={"d-flex position-relative " + classes.todos}
        style={{ gap: "10px" }}
      >
        {working ?? <div className="postion-absolute">Working</div>}
        {todos.length !== 0 ? (
          todos.map((todo) => {
            return (
              <AdminTodoItem
                id={todo.id}
                title={todo.title}
                task={todo.task}
                date={todo.date}
                state={setWorking}
                setEdit={setEditingTodo}
                newTask={newTask}
                newTitle={newTitle}
                editingTodo={editingTodo}
                handleClose={handleClose}
                setNewTask={setNewTask}
                setNewTitle={setNewTitle}
              />
            );
          })
        ) : (
          <div>No Todos</div>
        )}
      </div>
    </>
  );
};

export default AdminTodos;
