import axios from "axios";
import React, { useState } from "react";
import AdminStudentField from "../AdminStudentField";
import classes from "./AdminStudent.module.css";
const AdminStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [degree, setDegree] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [loading, setLoading] = useState(false);

  const NameValidator = (value) => {
    if (value.length < 3) {
      return true;
    } else {
      return false;
    }
  };
  const PassValidator = (value) => {
    if (value.length < 8) {
      return true;
    } else {
      return false;
    }
  };
  const CPassValidor = (value, password) => {
    if (value !== password) {
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      reg_no: regNo,
      name: firstName + " " + lastName,
      degree: degree,
      password: pass,
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/add-new-student", obj, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        console.log("hello");
      })
      .catch((e) => {
        setLoading(false);
      });
    console.log(obj);
  };

  return (
    <div className="p-3">
      <h3>Add A Student</h3>
      <form className="container" onSubmit={submitHandler}>
        <AdminStudentField
          title={"Student's First Name"}
          setHandler={setFirstName}
          isPassword={false}
          validator={NameValidator}
        />
        <AdminStudentField
          title={"Student's Last Name"}
          setHandler={setLastName}
          isPassword={false}
          validator={NameValidator}
        />
        <AdminStudentField
          title={"Student's Registration Number"}
          setHandler={setRegNo}
          isPassword={false}
        />
        <AdminStudentField
          isEmail={true}
          title={"Student's Email"}
          value={regNo}
        />
        <AdminStudentField
          title={"Student's Degree"}
          setHandler={setDegree}
          isPassword={false}
        />
        <AdminStudentField
          title={"Student's Password"}
          setHandler={setPass}
          isPassword={true}
          validator={PassValidator}
        />
        <AdminStudentField
          title={"Confirm Password"}
          setHandler={setCpass}
          isPassword={true}
          validator={CPassValidor}
          extra={pass}
        />

        <div className="text-center mt-3 ">
          {loading ? (
            <>loading</>
          ) : (
            <button className={classes.customBtn} disabled={loading}>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminStudent;
