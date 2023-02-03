import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { admin } from "../model/admin.model";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvidor = ({ children }) => {
  const Admin = new admin();
  const [todos, setTodos] = useState([]);
  const [selectedPath, setSelectedPath] = useState("");
  const [currentDefault, setCurrentDefault] = useState("");

  useEffect(() => {
    setCurrentDefault(localStorage.getItem("default"));
  }, []);

  const newTodo = (title, task, state) => {
    state(true);
    axios
      .post("http://localhost:8000/todos", { title: title, task: task })
      .then((res) => {
        setTodos(res.data.msg);
        state(false);
      });
  };
  const editTodo = (id, title, task, state) => {
    state(true);
    axios
      .put(`http://localhost:8000/todos/${id}`, { title: title, task: task })
      .then((res) => {
        setTodos(res.data.msg);
        state(false);
      });
  };
  const deleteTodo = (id, state) => {
    state(true);
    axios.delete(`http://localhost:8000/todos/${id}`).then((res) => {
      setTodos(res.data.msg);
      state(false);
    });
  };

  const setDefaultPassword = (value) => {
    localStorage.setItem("default", value);
    setCurrentDefault(value);
  };

  return (
    <DataContext.Provider
      value={{
        teacherAction: Admin.teacherAction,
        addStudent: Admin.addStudent,
        todos,
        newTodo,
        editTodo,
        deleteTodo,
        setTodos,
        selectedPath,
        currentDefault,
        setSelectedPath,
        setDefaultPassword,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
