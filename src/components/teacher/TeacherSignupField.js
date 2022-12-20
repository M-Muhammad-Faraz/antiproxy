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
      <div className={classes.line + " col-1 align-items-center"}>
        <AiOutlineLine size={28} color={"#999999"} />
      </div>
      <input type="text" className={"col-6 " + classes.inp} />
    </div>
  );
};

export default TeacherSignupField;
