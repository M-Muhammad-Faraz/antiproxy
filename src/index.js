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
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";
import { DataProvidor } from "./context/DataProvidor";
import AdminDashboard from "./components/Outlets/AdminDashboard";
import AdminNotification from "./components/Outlets/AdminNotification";
import AdminStudent from "./components/Outlets/AdminStudent";
import AdminSetting from "./components/Outlets/AdminSetting";
import AdminVerifyTeacher from "./components/Outlets/AdminVerifyTeacher";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />,
  },
  {
    path: "/admin-panel",
    element: <AdminPanel />,
    children: [
      {
        path: "/admin-panel/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin-panel/notification",
        element: <AdminNotification />,
      },
      {
        path: "/admin-panel/add-student",
        element: <AdminStudent />,
      },
      {
        path: "/admin-panel/verify-teacher",
        element: <AdminVerifyTeacher />,
      },
      {
        path: "/admin-panel/setting",
        element: <AdminSetting />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <DataProvidor>
      <RouterProvider router={router} />
    </DataProvidor>
  </React.StrictMode>
);
