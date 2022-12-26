import React from "react";
import { Link } from "react-router-dom";
import classes from "./AdminSidebar.module.css";
const AdminSidebar = () => {
  return (
    <div className={"col-3 " + classes.sidebar}>
      <div className="p-3">
        <ul style={{ listStyle: "none" }}>
          <li className="mb-2">
            <Link to={"/admin-panel/dashboard"}>Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link to={"/admin-panel/add-student"}>Add a Student</Link>
          </li>
          <li className="mb-2">
            <Link to={"/admin-panel/verify-teacher"}>Verify New Teacher</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
