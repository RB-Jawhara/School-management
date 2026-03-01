import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login.jsx";
import { Register } from "../Pages/register.jsx";
import { Users } from "../Pages/Users.jsx";
import Home from "../Pages/Home.jsx";
import { NotFound } from "../Pages/NotFound.jsx";
import { Layout } from "../Layouts/Layout.jsx";
import { GuestLayout } from "../Layouts/GuestLayout.jsx";
import { StudentDashboardLayout } from "../Layouts/StudentDashboardLayout.jsx";
import StudentDashboard from "../../components/Student/StudentDashboard.jsx";


export const STUDENT_DASHBOARD_ROUTE = "/Student_Dashboard";
export const LOGIN_ROUTE = "/login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
  {
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  {
    element: <StudentDashboardLayout />,
    children: [
      {
        path: STUDENT_DASHBOARD_ROUTE,
        element: <StudentDashboard />
      }
    ]
  }
]);

export default router;