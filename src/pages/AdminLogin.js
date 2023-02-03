import React, { useState } from "react";

import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { actionCodeSettings } from "../settings/firebase";
import { Toast, ToastContainer } from "react-bootstrap";

import classes from "./AdminLogin.module.css";
import illustration from "../assets/human.png";
import loadicon from "../assets/loader.svg";
import axios from "axios";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [toastSetting, setToastSetting] = useState({
    varient: "success",
    header: "Success",
    msg: "Success",
  });
  const [loader, setLoader] = useState(false);
  const submitHandler = () => {
    const auth = getAuth();
    setLoader(true);
    axios
      .post("http://localhost:8000/auth-admin", { email: email })
      .then((res) => {
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
          .then(() => {
            window.localStorage.setItem("emailForSignIn", email);
            setToastSetting({
              varient: "success",
              header: "Success",
              msg: "Success",
            });
            setShow(true);
          })
          .catch((err) => {
            const errorMessage = err.message;
            setToastSetting({
              varient: "danger",
              header: "Faliure",
              msg: errorMessage,
            });
            setShow(true);
          })
          .finally(() => {
            setLoader(false);
          });
      })
      .catch((err) => {
        console.log(err.response.data);
        setToastSetting({
          varient: "danger",
          header: "Faliure",
          msg: err.response.data.msg,
        });
        setShow(true);
        setLoader(false);
      });
  };
  return (
    <div>
      <div className={classes.background} />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", position: "relative" }}
      >
        <div className="container">
          <div
            className={"row " + classes.customCard}
            style={{ height: "55vh", maxWidth: "70vw", margin: "auto" }}
          >
            <div className="col-6 d-flex flex-column justify-content-center">
              <h2 className="text-center" style={{ color: "#b96d37" }}>
                ADMIN PANEL
              </h2>
              <p className="my-3">
                Enter the email address associated with your account and we’ll
                send a you link to login
              </p>
              <div
                className={classes.customInput + " d-flex align-items-center"}
              >
                <label className="ms-3" htmlFor>
                  Email
                </label>
                <div className={classes.line + " mx-2"} />
                <input
                  required
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                {!loader ? (
                  <div
                    onClick={submitHandler}
                    className={classes.customBtn + " my-3"}
                  >
                    SEND LINK
                  </div>
                ) : (
                  <img src={loadicon} height={70} alt="Loading icon" />
                )}
              </div>
            </div>
            <div className="col-6 position-relative">
              <img
                className="position-absolute"
                style={{ top: "-100px", left: "-50px" }}
                src={illustration}
                alt=""
              />
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

export default AdminLogin;
