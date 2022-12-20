import React from "react";
import classes from "./TeacherSignupField.module.css";
import { AiOutlineUser, AiOutlineLine } from "react-icons/ai";
const TeacherSignupField = ({ title, icon }) => {
  return (
    <div className={classes.customInput + " mb-3 row  p-3 "}>
      <div className="col-5 d-flex align-items-center">
        {icon}
        <label>{title}</label>
      </div>
      <div className="col-7 d-flex align-items-center">
        <div className={classes.line + " me-1"}></div>
        <input type="text" className={classes.inp} />
      </div>
    </div>
  );
};

export default TeacherSignupField;
