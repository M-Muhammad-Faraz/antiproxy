import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineKey,
} from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import TeacherSignupField from "../../components/teacher/TeacherSignupField";
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
          <TeacherSignupField
            title={"Full Name"}
            icon={<AiOutlineUser className="me-2" size={20} />}
          />
          <TeacherSignupField
            title={"Phone Number"}
            icon={<AiOutlinePhone className="me-2" size={20} />}
          />
          <TeacherSignupField
            title={"Email"}
            icon={<AiOutlineMail className="me-2" size={20} />}
          />
          <TeacherSignupField
            title={"Password"}
            icon={<AiOutlineKey className="me-2" size={20} />}
          />
          <TeacherSignupField
            title={"Confirm Password"}
            icon={<GrPowerReset className="me-2" size={20} />}
          />
          <div className={classes.check}>
            <input type="checkbox" />{" "}
            <label>
              Agree to the <span>terms and conditions</span>.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignup;
