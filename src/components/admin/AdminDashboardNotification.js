import React from "react";
import classes from "./AdminDashboardNotification.module.css";
const AdminDashboardNotification = () => {
  return (
    <div className={classes.notificationCard + " mb-4 position-relative"}>
      <div className={classes.notiArea + " mb-2 " + classes.emptyNoti}>
        <div>No new Notification</div>
      </div>
      <div className="d-flex justify-content-center">
        <div className={classes.customBtn}>Load More</div>
      </div>
    </div>
  );
};

export default AdminDashboardNotification;
