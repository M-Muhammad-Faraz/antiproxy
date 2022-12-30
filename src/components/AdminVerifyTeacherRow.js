import React from "react";

const AdminVerifyTeacherRow = ({ index, doc, onReject, onApprove, state }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{doc.teacher_name}</td>
      <td>{doc.teacher_email}</td>
      <td>{doc.teacher_phone}</td>
      <td>
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
      </td>
    </tr>
  );
};

export default AdminVerifyTeacherRow;
