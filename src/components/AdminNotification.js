import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import classes from "./AdminNotification.module.css";
import { db } from "../settings/firebase";
import AdminNotificationItem from "./AdminNotificationItem";
import axios from "axios";
const AdminNotification = () => {
  const [loading, setloading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [data, setData] = useState([]);

  const onReject = (doc) => {
    setProcessing(true);
    const obj = { action: "reject", teacher: doc };
    axios
      .post("http://localhost:8000/teacher-action", obj, {
        headers: { "content-type": "application/json" },
      })
      .then(() => {
        setData(
          data.filter((item) => {
            return item.teacher_uid === doc.teacher_uid;
          })
        );
        setProcessing(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const onApprove = (doc) => {
    setProcessing(true);
    const obj = { action: "approved", teacher: doc };
    axios
      .post("http://localhost:8000/teacher-action", obj, {
        headers: { "content-type": "application/json" },
      })
      .then(() => {
        setData(
          data.filter((item) => {
            return item.teacher_uid === doc.teacher_uid;
          })
        );
        setProcessing(false);
      })
      .catch((e) => {
        console.log(e);
      });
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
      ) : (
        <ul classname="list-group list-group-flush">
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
