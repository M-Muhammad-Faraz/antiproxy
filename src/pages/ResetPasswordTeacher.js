import React, { useState } from "react";
import imgs from "../assets/Rectangle 13.png";
import { Toast, ToastContainer } from "react-bootstrap";
import classes from "./ResetPassword.module.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ResetPasswordField from "../components/ResetPasswordField";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordErr] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [cpasswordError, setCPasswordErr] = useState("");
  const [show, setShow] = useState(false);

  const [toastSetting, setToastSetting] = useState({
    varient: "success",
    header: "Success",
    msg: "Success",
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const submitHandler = (e) => {
    e.preventDefault();
    var passwordErr = "";
    var cpasswordErr = "";
    if (password.length === 0) {
      passwordErr = "Password field cannot be empty.";
    } else if (password.length < 8) {
      passwordErr = "Password should be greater then 8 characters";
    } else {
      passwordErr = "";
    }
    setPasswordErr(passwordErr);

    if (cpassword.length === 0) {
      cpasswordErr = "Password field cannot be empty.";
    } else if (cpassword.length < 8) {
      cpasswordErr = "Password should be greater then 8 characters";
    } else if (cpassword !== password) {
      cpasswordErr = "Passwords donot match!";
    } else {
      cpasswordErr = "";
    }
    setCPasswordErr(cpasswordErr);

    if (!cpasswordErr && !passwordErr) {
      axios
        .post("http://localhost:8000/update-password/teacher", {
          email: email,
          password: password,
        })
        .then(() => {
          setToastSetting({
            varient: "success",
            header: "Success",
            msg: "Success",
          });
          setShow(true);
        })
        .catch(() => {
          setToastSetting({
            varient: "danger",
            header: "Error",
            msg: "Error",
          });
          setShow(true);
        });
    }
  };

  return (
    <div className={`${classes.main}`}>
      <div className={`container ${classes.mainArea}`}>
        <div className="row g-0">
          <div className="col-6">
            <img src={imgs} alt="" />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <div>
              <div className={`${classes.mainForm}`}>
                <h3 style={{ textAlign: "center" }} className="mb-5">
                  RECOVER PASSWORD
                </h3>
                <div>
                  {passwordError ? (
                    <div id="passErr" className={classes.err}>
                      {passwordError}
                    </div>
                  ) : (
                    <></>
                  )}
                  <ResetPasswordField
                    title={"Password"}
                    handler={setPassword}
                    type="password"
                    validator={(value) => {
                      if (value.length === 0) {
                        return false;
                      } else if (value.length < 8) {
                        return false;
                      } else {
                        return true;
                      }
                    }}
                  />
                  {cpasswordError ? (
                    <div id="cpassErr" className={classes.err}>
                      {cpasswordError}
                    </div>
                  ) : (
                    <></>
                  )}
                  <ResetPasswordField
                    title={"Confirm Password"}
                    handler={setCPassword}
                    type="password"
                    val={password}
                    validator={(value, pass) => {
                      if (value.length === 0) {
                        return false;
                      } else if (value !== pass) {
                        return false;
                      } else {
                        return true;
                      }
                    }}
                  />
                  <div className="mt-5 text-center">
                    <button
                      className={classes.customBtn}
                      onClick={submitHandler}
                    >
                      Recover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="p-3" position={"top-center"}>
        <Toast
          onClose={() => {
            setShow(false);
          }}
          show={show}
          delay={5000}
          autohide
          animation={true}
          bg={toastSetting.varient}
        >
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{toastSetting.header}</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body className="text-light">{toastSetting.msg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ResetPassword;
