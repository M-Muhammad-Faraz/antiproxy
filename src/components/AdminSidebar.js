import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvidor";
import classes from "./AdminSidebar.module.css";
const AdminSidebar = () => {
  const { selectedPath } = useData();
  return (
    <div className={"col-3 " + classes.sidebar}>
      <div className="p-3">
        <ul style={{ listStyle: "none" }}>
          <li className="mb-2">
            <Link
              to={"/admin-panel/dashboard"}
              className={
                selectedPath === "dashboard"
                  ? classes.activeLink
                  : classes.inactiveLink
              }
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to={"/admin-panel/add-student"}
              className={
                selectedPath === "add-student"
                  ? classes.activeLink
                  : classes.inactiveLink
              }
            >
              Add a Student
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to={"/admin-panel/verify-teacher"}
              className={
                selectedPath === "verify-teacher"
                  ? classes.activeLink
                  : classes.inactiveLink
              }
            >
              Verify New Teacher
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
