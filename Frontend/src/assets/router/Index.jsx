import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login.jsx";
import { Register } from "../Pages/Register.jsx";
import { Users } from "../Pages/Users.jsx";
import Home from "../Pages/Home.jsx";
import { NotFound } from "../Pages/NotFound.jsx";

import { Layout } from "../Layouts/Layout.jsx";
import { GuestLayout } from "../Layouts/GuestLayout.jsx";
import { StudentDashboardLayout } from "../Layouts/StudentDashboardLayout.jsx";
import StudentDashboard from "../../components/Student/StudentDashboard";
import AdminDashboardLayout from "../Layouts/AdminDashboardLayout.jsx";
import AdminDasboard from "../../components/Admin/AdminDasboard.jsx";
import TeacherDashboardLayout from "../Layouts/TeacherDashboardLayout.jsx";
import TeacherDashboard from "../../components/Teacher/TeacherDashboard.jsx";

export const STUDENT_DASHBOARD_ROUTE = "/student/dashboard";
export const ADMIN_DASHBOARD_ROUTE = "/admin/dashboard";
export const TEACHER_DASHBOARD_ROUTE = "/teacher/dashboard";
export const LOGIN_ROUTE = "/login";

const router = createBrowserRouter([

  // ✅ Guest routes — login/register
  {
    element: <GuestLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  // ✅ Student routes
  {
    path: "/student",                          // ⬅️ prefix مهم
    element: <StudentDashboardLayout />,
    children: [
      { path: "dashboard", element: <StudentDashboard /> },
    ],
  },

  // ✅ Admin routes
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      { path: "dashboard", element: <AdminDasboard /> },
    ],
  },

  // ✅ Teacher routes
  {
    path: "/teacher",
    element: <TeacherDashboardLayout />,
    children: [
      { path: "dashboard", element: <TeacherDashboard /> },
    ],
  },

  // ✅ Public routes
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "*", element: <NotFound /> },
    ],
  },

]);

export default router;