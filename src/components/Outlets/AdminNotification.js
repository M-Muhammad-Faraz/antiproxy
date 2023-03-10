import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import classes from "./AdminNotification.module.css";
import { db } from "../../settings/firebase";
import AdminNotificationItem from "../AdminNotificationItem";
import axios from "axios";
import { useData } from "../../context/DataProvidor";
const AdminNotification = () => {
  const [loading, setloading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [data, setData] = useState([]);
  const AdminControl = useData();
  AdminControl.setSelectedPath("notification");
  const onReject = async (doc) => {
    setProcessing(true);
    const obj = { action: "reject", teacher: doc };
    await AdminControl.teacherAction(obj);
    setProcessing(false);
    const newData = data.filter((item) => {
      return item.teacher_uid !== doc.teacher_uid;
    });
    setData(newData);
  };
  const onApprove = async (doc) => {
    setProcessing(true);
    const obj = { action: "approved", teacher: doc };
    await AdminControl.teacherAction(obj);
    setProcessing(false);
    setData(
      data.filter((item) => {
        return item.teacher_uid !== doc.teacher_uid;
      })
    );
  };
  useEffect(() => {
    setloading(true);
    getDocs(collection(db, "pending")).then((querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push(doc.data());
      });
      setData(temp);
      setloading(false);
    });
  }, []);

  return (
    <div className={classes.main + " container py-3"}>
      {loading ? (
        "Loading Notifications"
      ) : data.length === 0 ? (
        <>No Notification</>
      ) : (
        <ul className="list-group list-group-flush">
          {data.map((doc) => {
            return (
              <AdminNotificationItem
                doc={doc}
                onApprove={onApprove}
                onReject={onReject}
                state={processing}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AdminNotification;
