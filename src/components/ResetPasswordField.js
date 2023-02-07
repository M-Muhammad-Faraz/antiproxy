import React, { useState } from "react";
import classes from "./ResetPasswordField.module.css";
import { GrClose } from "react-icons/gr";
const ResetPasswordField = ({ title, icon, handler, type, validator, val }) => {
  const [isValid, setIsValid] = useState(true);
  return (
    <div
      className={
        isValid
          ? classes.customInput + " mb-3 row  p-3 "
          : classes.customInput + " mb-3 row  p-3 " + classes.err
      }
    >
      <div className="col-5 d-flex align-items-center">
        {icon}
        <label>{title}</label>
      </div>
      <div className="col-7 d-flex align-items-center">
        <div className={classes.line + " me-1"}></div>

        <input
          type={type}
          required
          className={classes.inp}
          onChange={(e) => {
            handler(e.target.value);
            if (val) {
              setIsValid(validator(e.target.value, val));
            } else {
              setIsValid(validator(e.target.value));
            }
          }}
        />
        {isValid ? null : <GrClose className={classes.svgs} />}
      </div>
    </div>
  );
};

export default ResetPasswordField;
