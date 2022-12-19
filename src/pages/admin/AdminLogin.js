import React, { useState } from "react";

import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { actionCodeSettings } from "../../settings/firebase";
import classes from "./AdminLogin.module.css";
import illustration from "../../assets/admin/human.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const submitHandler = () => {
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        setSuccess(true);
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        setError(true);
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
              {success ? (
                <div className="mb-2">
                  <small className="text-success">Success!</small>
                </div>
              ) : null}
              {error ? (
                <div>
                  <small className="text-danger">Error!</small>
                </div>
              ) : null}
              <div
                className={classes.customInput + " d-flex align-items-center"}
              >
                <label className="ms-3" htmlFor>
                  Email
                </label>
                <div className={classes.line + " mx-2"} />
                <input
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div
                  onClick={submitHandler}
                  className={classes.customBtn + " my-3"}
                >
                  SEND LINK
                </div>
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
    </div>
  );
};

export default AdminLogin;
