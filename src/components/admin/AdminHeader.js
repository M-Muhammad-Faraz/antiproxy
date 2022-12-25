import React from "react";
import { Link } from "react-router-dom";
import classes from "./AdminHeader.module.css";
const AdminHeader = () => {
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
              <Link to={"admin-panel/notification"}>Notification</Link>
            </li>
            <li>Setting</li>
            <li>Logout</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
