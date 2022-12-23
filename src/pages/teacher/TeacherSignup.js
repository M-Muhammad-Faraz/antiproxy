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
  const [fullName, setFullname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");

  const handleSubmit = () => {
    const creds = {
      teacher_name: fullName,
      teacher_phone: phoneNo,
      teacher_email: email,
      teacher_password: pass,
    };
    console.log(creds);
  };

  return (
    <div className="row">
      <div className={"col-3 " + classes.side}></div>
      <div className="col-9 d-flex align-items-center justify-content-center flex-column">
        <div className={"mb-3 " + classes.heading1}>SIGNUP</div>
        <form>
          <TeacherSignupField
            title={"Full Name"}
            icon={<AiOutlineUser className="me-2" size={20} />}
            handler={setFullname}
          />
          <TeacherSignupField
            title={"Phone Number"}
            icon={<AiOutlinePhone className="me-2" size={20} />}
            handler={setPhoneNo}
          />
          <TeacherSignupField
            title={"Email"}
            icon={<AiOutlineMail className="me-2" size={20} />}
            handler={setEmail}
          />
          <TeacherSignupField
            title={"Password"}
            icon={<AiOutlineKey className="me-2" size={20} />}
            handler={setPass}
          />
          <TeacherSignupField
            title={"Confirm Password"}
            icon={<GrPowerReset className="me-2" size={20} />}
            handler={setCPass}
          />
          <div className={classes.check}>
            <input type="checkbox" />{" "}
            <label>
              Agree to the <span>terms and conditions</span>.
            </label>
          </div>
          <div className={classes.customBtn + " mt-3"} onClick={handleSubmit}>
            REGISTER
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignup;
