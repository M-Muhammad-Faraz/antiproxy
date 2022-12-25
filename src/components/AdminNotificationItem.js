import React from "react";

const AdminNotificationItem = ({ doc, onReject, onApprove, state }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div>
        <h5 style={{ margin: 0, padding: 0 }}>Teacher Approval</h5>
        <div>
          <small>
            <strong>Name:</strong> {doc.teacher_name}
          </small>
        </div>
        <div>
          <small>
            <strong>Email:</strong> {doc.teacher_email}
          </small>
        </div>
        <div>
          <small>
            <strong>Phone#:</strong> {doc.teacher_phone}
          </small>
        </div>
      </div>
      <div>
        <button
          className={
            !state ? "btn btn-success me-2" : "btn btn-success me-2 disabled"
          }
          onClick={() => {
            onApprove(doc);
          }}
        >
          Approve
        </button>
        <button
          className={!state ? "btn btn-danger" : "btn btn-danger disabled"}
          onClick={() => {
            onReject(doc);
          }}
        >
          Reject
        </button>
      </div>
    </li>
  );
};

export default AdminNotificationItem;
