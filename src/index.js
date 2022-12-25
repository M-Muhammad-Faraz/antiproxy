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
import AdminLogin from "./pages/AdminLogin";
import TeacherSignup from "./pages/teacher/TeacherSignup";
import TeacherPortal from "./pages/teacher/TeacherPortal";
import { DataProvidor } from "./context/DataProvidor";
import AdminDashboard from "./components/AdminDashboard";
import AdminNotification from "./components/admin/AdminNotification";

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
    children: [
      {
        path: "admin-panel/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "admin-panel/notification",
        element: <AdminNotification />,
      },
    ],
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
    <DataProvidor>
      <RouterProvider router={router} />
    </DataProvidor>
  </React.StrictMode>
);
