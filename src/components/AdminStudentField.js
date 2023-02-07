import React, { useState } from "react";
import { useData } from "../context/DataProvidor";
import classes from "./AdminStudentField.module.css";
const AdminStudentField = ({
  title,
  validator,
  setHandler,
  getHandle,
  isPassword,
  isEmail,
  value,
  extra,
}) => {
  const [err, setErr] = useState(false);
  const { currentDefault } = useData();
  return (
    <div className={classes.customRow + " row mb-2"}>
      <div className="col-5 align-self-center">
        <label>{title}</label>
      </div>
      {isPassword ? (
        <div className="col-7 align-self-center position-relative">
          <input
            type="password"
            className={
              err
                ? classes.customInp + " border border-danger"
                : classes.customInp + ""
            }
            value={getHandle}
            onChange={(e) => {
              setErr(validator(e.target.value, extra));
              setHandler(e.target.value);
            }}
          />
          <div
            className={classes.defaultBtn + ""}
            onClick={() => {
              setHandler(currentDefault);
            }}
          >
            Default Password
          </div>
        </div>
      ) : (
        <div className="col-7 align-self-center">
          {isEmail ? (
            <div
              className={
                err
                  ? classes.customInp + " border border-danger " + classes.mh44
                  : classes.customInp + " " + classes.mh44
              }
            >
              {value.length === 0 ? `${value}` : `${value}@cust.pk`}
            </div>
          ) : (
            <input
              type={"text"}
              className={
                err
                  ? classes.customInp + " border border-danger"
                  : classes.customInp + ""
              }
              onChange={(e) => {
                setErr(validator(e.target.value));

                setHandler(e.target.value);
              }}
              value={getHandle}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AdminStudentField;
