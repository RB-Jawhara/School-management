import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { STUDENT_DASHBOARD_ROUTE, LOGIN_ROUTE } from "../router/index.jsx";
import { useEffect } from "react";

export const GuestLayout = () => {
  // const navigate = useNavigate();
    //useEffect(() => {
            //if (localStorage.getItem("token")) {
                //navigate(STUDENT_DASHBOARD_ROUTE);//!false 
            //}
       // }, [navigate]);//had use effect wach sure kayn token f local storage, ila kant sir direct la dashord kay redirect l login
    return (
        <>
            <div className="flex items-center bg-gray-800 text-white p-4 shadow-md  ">
                <div className="flex items-center ">
                    <img src={logo} alt="Logo" className="w-12 h-12  " />
                    <span className="text-xl font-semibold ml-4">
                        School Management System
                    </span>
                </div>

                <nav className="ml-auto">
                    <ul className="flex gap-16 text-xl mr-20">
                        <Link
                            to="/"
                            className="hover:text-blue-500 cursor-pointer"
                        >
                            Home Page
                        </Link>
                           <Link
                            to="/login"
                            className="hover:text-blue-500 cursor-pointer"
                        >
                            Login
                        </Link>

                        <Link
                            to="/Register"
                            className="hover:text-blue-500 cursor-pointer"
                        >
                            Register
                        </Link>

                        <Link
                            to="/Users"
                            className="hover:text-blue-500 cursor-pointer"
                        >
                            Users
                        </Link>
                        <Link
                            to="/User"
                            className="ml-5 px-3 py-1 rounded-xl font semibld bg-gray-400 text-gray cursor-pointer"
                        >
                            Dark mode
                        </Link>
                    </ul>
                </nav>
            </div>

            <main>
                <Outlet />
            </main>

            <footer>footer</footer>
        </>
    );
};
