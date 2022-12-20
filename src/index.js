import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminLogin from "./pages/admin/AdminLogin";
import TeacherSignup from "./pages/teacher/TeacherSignup";
import TeacherPortal from "./pages/teacher/TeacherPortal";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin-login",
    element: <AdminLogin />,
  },
  {
    path: "admin-panel",
    element: <AdminPanel />,
  },
  {
    path: "teacher-panel",
    element: <TeacherPortal />,
  },
  {
    path: "teacher-register",
    element: <TeacherSignup />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
