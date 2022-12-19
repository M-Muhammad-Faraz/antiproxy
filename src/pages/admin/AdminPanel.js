import React from "react";
import classes from "./AdminPanel.module.css";
import AdminDashboard from "../../components/admin/AdminDashboard";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";

const AdminPanel = () => {
  return (
    <div className={classes.main}>
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminPanel;
