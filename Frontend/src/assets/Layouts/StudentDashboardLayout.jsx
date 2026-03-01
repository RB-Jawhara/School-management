import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../logo.jpg";
import { LOGIN_ROUTE } from "../router/index.jsx";
import AxiosClient from "../../api/axios";

export const StudentDashboardLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuthAndFetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // If no token, redirect to login
        navigate(LOGIN_ROUTE);
        return;
      }

      try {
        // Fetch user data from Laravel backend
        const res = await AxiosClient.get("/user");
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // If error (401 etc.), remove token and redirect
        localStorage.removeItem("token");
        navigate(LOGIN_ROUTE);
      }
    };

    checkAuthAndFetchUser();
  }, [navigate]);

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
              Home Page
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-blue-500 cursor-pointer"
            >
              Logout
            </button>
            <Link
              to="/User"
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