import React, { useState } from "react";
import {
  getAuth,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";

import { Toast, ToastContainer } from "react-bootstrap";
import "./ResetPasswordTeacher.css";
import axios from "axios";
const ResetPasswordTeacher = () => {
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
  function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function handleResetPassword(auth, actionCode, continueUrl, lang, password) {
    // Localize the UI to the selected language as determined by the lang
    // parameter.

    // Verify the password reset code is valid.
    verifyPasswordResetCode(auth, actionCode)
      .then((email) => {
        const accountEmail = email;
        confirmPasswordReset(auth, actionCode, password)
          .then((resp) => {
            axios
              .post("http://localhost:8000/update-password/teacher", {
                email: accountEmail,
                password: password,
              })
              .then(() => {
                setToastSetting({
                  varient: "success",
                  header: "Success",
                  msg: "Success",
                });
                setShow(true);
              });
          })
          .catch((error) => {
            // Error occurred during confirmation. The code might have expired or the
            // password is too weak.
            setToastSetting({
              varient: "danger",
              header: "Error",
              msg: error.message,
            });
            setShow(true);
          });
      })
      .catch((error) => {
        setToastSetting({
          varient: "danger",
          header: "Error",
          msg: error.message,
        });
        setShow(true);
      });
  }

  const submitHandler = () => {
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

    if (!cpasswordError && !passwordError) {
      handleResetPassword(getAuth(), actionCode, "", "", password);
    }
  };

  const mode = getParameterByName("mode");
  // Get the one-time code from the query parameter.
  const actionCode = getParameterByName("oobCode");
  console.log(mode, actionCode);

  return (
    <div className="main">
      <div className="main-form">
        <h3 style={{ textAlign: "center" }}>Reset Password!</h3>
        <div>
          {passwordError ?? (
            <span id="passErr" className="error">
              {passwordError}
            </span>
          )}
          <div className="row mb-2">
            <label className="col-6" htmlFor="password">
              Enter New Password:{" "}
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="col-6"
              type="password"
              id="password"
            />
          </div>
          {cpasswordError ?? (
            <span id="cpassErr" className="error">
              {cpasswordError}
            </span>
          )}
          <div className="row">
            <label className="col-6" htmlFor="cpassword">
              Confirm New Password:{" "}
            </label>
            <input
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
              className="col-6"
              type="password"
              id="cpassword"
            />
          </div>
          <div className="mt-2">
            <button style={{ width: "100%" }} onClick={submitHandler}>
              Submit
            </button>
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

export default ResetPasswordTeacher;
