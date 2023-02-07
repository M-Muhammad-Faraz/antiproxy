import axios from "axios";
import React, { useState } from "react";
import { useData } from "../../context/DataProvidor";
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

  const AdminControl = useData();
  AdminControl.setSelectedPath("add-student");
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
    AdminControl.addStudent(obj)
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
      <h3>Add a Student</h3>
      <form className="container" onSubmit={submitHandler}>
        <AdminStudentField
          title={"First Name"}
          setHandler={setFirstName}
          isPassword={false}
          validator={NameValidator}
          getHandle={firstName}
        />
        <AdminStudentField
          title={"Last Name"}
          setHandler={setLastName}
          isPassword={false}
          validator={NameValidator}
          getHandle={lastName}
        />
        <AdminStudentField
          title={"Registration Number"}
          setHandler={setRegNo}
          isPassword={false}
          validator={() => {}}
          getHandle={regNo}
        />
        <AdminStudentField
          isEmail={true}
          title={"Email"}
          value={regNo}
          validator={() => {}}
        />
        <AdminStudentField
          title={"Degree"}
          setHandler={setDegree}
          isPassword={false}
          validator={() => {}}
          getHandle={degree}
        />
        <AdminStudentField
          title={"Password"}
          setHandler={setPass}
          isPassword={true}
          validator={PassValidator}
          getHandle={pass}
        />
        <AdminStudentField
          title={"Confirm Password"}
          setHandler={setCpass}
          isPassword={true}
          validator={CPassValidor}
          getHandle={cpass}
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
