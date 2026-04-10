import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../logo.jpg";
import { LOGIN_ROUTE } from "../router/Index.jsx";
import AxiosClient from "../../api/axios";
import { UserStateContext } from "../../Context/UserContext.jsx";
import StudentDropDown from "../../components/Student/StudentDropDown.jsx";
import StudentApi from "../../Service/Api/Student/StudentApi.js";
//import { ModeToggle } from "../../components/ModeToggle.jsx";


export const StudentDashboardLayout = () => {

  const navigate = useNavigate();
  const context = useContext(UserStateContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!context.authenticated) {
      navigate(LOGIN_ROUTE);
      return;
    }
    AxiosClient.get("/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [context.authenticated, navigate]);
  
   
    
  

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
          <ul className="flex gap-16 text-xl mr-20 items-center">
            <li>
              <Link to="/" className="hover:text-blue-500 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <StudentDropDown />
            </li>
            
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};