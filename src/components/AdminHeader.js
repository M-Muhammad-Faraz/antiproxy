import React from "react";
import { Link } from "react-router-dom";
import classes from "./AdminHeader.module.css";
import { useData } from "../context/DataProvidor";

import { useNavigate } from "react-router-dom";
const AdminHeader = () => {
  const { selectedPath, logout } = useData();

  const navigate = useNavigate();
  return (
    <header className={classes.header + " d-flex align-items-center"}>
      <nav className="container d-flex justify-content-between align-items-center">
        <h2 style={{ margin: 0 }}>Admin Panel</h2>
        <div>
          <ul
            className="d-flex align-items-center"
            style={{ margin: 0, padding: 0, listStyle: "none", gap: "10px" }}
          >
            <li>
              <Link
                to={"/admin-panel/notification"}
                className={
                  selectedPath === "notification"
                    ? classes.activeLink
                    : classes.inactiveLink
                }
              >
                Notification
              </Link>
            </li>
            <li>
              <Link
                to={"/admin-panel/setting"}
                className={
                  selectedPath === "setting"
                    ? classes.activeLink
                    : classes.inactiveLink
                }
              >
                Setting
              </Link>
            </li>
            <li
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
