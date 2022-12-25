import React from "react";
import { Link } from "react-router-dom";
import classes from "./AdminSidebar.module.css";
const AdminSidebar = () => {
  return (
    <div className={"col-3 " + classes.sidebar}>
      <div className="p-3">
        <ul style={{ listStyle: "none" }}>
          <li className="mb-2">
            <Link className="admin-panel/dashboard">Dashboard</Link>
          </li>
          <li className="mb-2">Add a Student</li>
          <li className="mb-2">Verify New Teacher</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
