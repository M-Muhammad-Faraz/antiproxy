import React, { useEffect, useState } from "react";
import classes from "./AdminDashboard.module.css";
import AdminDashboardNotification from "../AdminDashboardNotification";
import AdminTodos from "../AdminTodos";
import axios from "axios";
import { useData } from "../../context/DataProvidor";
import { Modal, Button } from "react-bootstrap";
const AdminDashboard = () => {
  const { setTodos, newTodo, setSelectedPath } = useData();
  const [working, setWorking] = useState(false);
  const [addingTodo, setAddingTodo] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  setSelectedPath("dashboard");
  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((res) => {
        setTodos(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleClose = () => {
    setAddingTodo(false);
  };
  return (
    <div className="p-3">
      <h3 className="mb-3">Dashboard</h3>
      {/* Notification Area */}
      <h6>
        <b>Latest Notification</b>
      </h6>
      <AdminDashboardNotification />
      {/* Todo Area */}
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h6>
          <b>Todo List</b>
        </h6>
        <div
          className={classes.customBtn}
          onClick={() => {
            setAddingTodo(true);
          }}
        >
          Add Todo
        </div>
      </div>
      <AdminTodos working={working} setWorking={setWorking} />
      <Modal show={addingTodo} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Title: </label>
            <input
              type="text"
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
            />
          </div>
          <div>
            <label>Task: </label>
            <input
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              newTodo(newTitle, newTask, setWorking);
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
