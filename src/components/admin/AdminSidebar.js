import React from "react";
import classes from "./AdminSidebar.module.css";
const AdminSidebar = () => {
  return (
    <div className={"col-3 " + sidebar}>
      <div className="p-3">
        <ul style={{ listStyle: "none" }}>
          <li className="mb-2">Dashboard</li>
          <li className="mb-2">Add a Student</li>
          <li className="mb-2">Verify New Teacher</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
