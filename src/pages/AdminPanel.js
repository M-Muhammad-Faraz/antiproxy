import React, { useEffect, useState } from "react";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import classes from "./AdminPanel.module.css";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  const [loader, setLoader] = useState(false);
  const [option, setOption] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
      }
      // The client SDK will parse the code from the link for you.
      setLoader(true);
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          setOption(true);
          setLoader(false);
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
          setLoader(false);
        });
    }
  }, []);

  return loader ? (
    <div>Loading</div>
  ) : option ? (
    <div className={classes.main}>
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div>Go Back</div>
  );
};

export default AdminPanel;
