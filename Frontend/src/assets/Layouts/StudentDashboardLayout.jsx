import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../logo.jpg";
import { LOGIN_ROUTE } from "../router/Index.jsx";
import AxiosClient from "../../api/axios";
import { UserStateContext } from "../../Context/UserContext.jsx";

export const StudentDashboardLayout = () => {
  const navigate = useNavigate();
  const context = useContext(UserStateContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!context.authenticated) {
      navigate(LOGIN_ROUTE);
      return;
    }

    // Fetch user data
    AxiosClient.get("/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [context, navigate]); // dependencies included

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(LOGIN_ROUTE);
  };

  return (
    <>
      <div className="flex items-center bg-gray-800 text-white p-4 shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <span className="text-xl font-semibold ml-4">
            School Management System
          </span>
        </div>

        <nav className="ml-auto">
          <ul className="flex gap-16 text-xl mr-20">
            <Link to="/" className="hover:text-blue-500 cursor-pointer">
              Home
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-blue-500 cursor-pointer"
            >
              Logout
            </button>
            <Link
              to="/user"
              className="ml-5 px-3 py-1 rounded-xl font-semibold bg-gray-400 text-gray-800 cursor-pointer"
            >
              Dark Mode
            </Link>
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};