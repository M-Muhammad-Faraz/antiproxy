import React, { useState } from "react";
import classes from "./TeacherSignup.module.css";
const TeacherSignup = () => {
  const [info, setInfo] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  return (
    <div className="row">
      <div className={"col-3 " + classes.side}></div>
      <div className="col-9">
        <div>SIGNUP</div>
        <form>
          <div>
            <div className={classes.icon}></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignup;
