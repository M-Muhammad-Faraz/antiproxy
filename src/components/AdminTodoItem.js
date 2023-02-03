import { Modal, Button } from "react-bootstrap";
import { useData } from "../context/DataProvidor";
import classes from "./AdminTodoItem.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
const AdminTodoItem = ({
  id,
  title,
  task,
  date,
  state,
  newTitle,
  newTask,
  setEdit,
  editingTodo,
  handleClose,
  setNewTask,
  setNewTitle,
}) => {
  console.log(date);
  const pDate = new Date(parseInt(date));
  let day = pDate.getDate().toString().padStart(2, "0");
  let month = (pDate.getMonth() + 1).toString().padStart(2, "0");
  let year = pDate.getFullYear();
  let formattedDate = `${day}/${month}/${year}`;
  const { editTodo, deleteTodo } = useData();
  return (
    <>
      <div className={classes.todo}>
        <div
          className={
            classes.todoControls +
            " d-flex justify-content-between align-items-start"
          }
        >
          <small>{formattedDate}</small>
          <div className="d-flex" style={{ gap: "4px" }}>
            <div
              onClick={() => {
                setEdit(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <BsPencilSquare />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                deleteTodo(id, state);
              }}
            >
              <GrClose />
            </div>
          </div>
        </div>
        <div>
          <b>Title:</b>
        </div>
        <div>
          <small>
            <b>{title}</b>
          </small>
        </div>
        <div style={{ textDecoration: "underline" }}>Description</div>
        <div>
          <small>{task}</small>
        </div>
      </div>
      <Modal show={editingTodo} onHide={handleClose}>
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
              editTodo(id, newTitle, newTask, state);
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminTodoItem;
