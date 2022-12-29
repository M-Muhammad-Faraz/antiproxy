import React from "react";
import classes from "./AdminStudentField.module.css";
const AdminStudentField = ({
  title,
  validator,
  setHandler,
  isPassword,
  isEmail,
  value,
}) => {
  return (
    <div className={classes.customRow + " row mb-2"}>
      <div className="col-6 align-self-center">
        <label>{title}</label>
      </div>
      {isPassword ? (
        <div className="col-6 align-self-center position-relative">
          <input
            type="password"
            className={classes.customInp + ""}
            onChange={(e) => {
              setHandler(e.target.value);
            }}
          />
          <div className={classes.defaultBtn + ""}>Default Password</div>
        </div>
      ) : (
        <div className="col-6 align-self-center">
          {isEmail ? (
            <div className={classes.customInp + " " + classes.mh44}>
              {value.length === 0 ? `${value}` : `${value}@cust.pk`}
            </div>
          ) : (
            <input
              type={"text"}
              className={classes.customInp + ""}
              onChange={(e) => {
                setHandler(e.target.value);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminStudentField;
