import React from "react";
import classes from "./AdminDashboard.module.css";
import AdminDashboardNotification from "./AdminDashboardNotification";
import AdminTodos from "./AdminTodos";

const AdminDashboard = () => {
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
        <div className={classes.customBtn}>Add Todo</div>
      </div>
      <AdminTodos />
    </div>
  );
};

export default AdminDashboard;
