import React, { useEffect, useState } from "react";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import classes from "./AdminPanel.module.css";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import AdminFooter from "../components/AdminFooter";
import loading from "../assets/loading.svg";

const AdminPanel = () => {
  const [loader, setLoader] = useState(false);
  const [option, setOption] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
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
        })
        .catch((error) => {
          setLoader(false);
        });
    }
  }, []);

  return loader ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={loading} alt="" />
    </div>
  ) : option ? (
    <div className={classes.main}>
      <AdminHeader />
      <div className="row g-0">
        <AdminSidebar />
        <div className="col-9">
          <Outlet />
        </div>
        <AdminFooter />
      </div>
    </div>
  ) : (
    <>{navigate("/")}</>
  );
};

export default AdminPanel;
