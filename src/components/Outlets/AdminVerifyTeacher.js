import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import classes from "./AdminNotification.module.css";
import { db } from "../../settings/firebase";
import axios from "axios";
import AdminVerifyTeacherRow from "../AdminVerifyTeacherRow";
const AdminVerifyTeacher = () => {
  const [loading, setloading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [data, setData] = useState([]);

  const onReject = async (doc) => {
    setProcessing(true);
    const obj = { action: "reject", teacher: doc };

    const res = await axios.post("http://localhost:8000/teacher-action", obj, {
      headers: { "content-type": "application/json" },
    });
    setProcessing(false);
    const newData = data.filter((item) => {
      return item.teacher_uid !== doc.teacher_uid;
    });
    setData(newData);
  };
  const onApprove = async (doc) => {
    setProcessing(true);
    const obj = { action: "approved", teacher: doc };
    await axios.post("http://localhost:8000/teacher-action", obj, {
      headers: { "content-type": "application/json" },
    });
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
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {data.map((doc, index) => {
              return (
                <AdminVerifyTeacherRow
                  index={index}
                  doc={doc}
                  onApprove={onApprove}
                  onReject={onReject}
                  state={processing}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminVerifyTeacher;
