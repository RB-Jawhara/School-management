import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../logo.jpg";
import { LOGIN_ROUTE } from "../router/Index.jsx";
import AxiosClient from "../../api/axios";
import { UserStateContext } from "../../Context/UserContext.jsx";
import StudentDropDown from "../../components/Student/StudentDropDown.jsx";
import Sidebarcontext from "../../components/SideBar/Sidebarcontext.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; 

export const StudentDashboardLayout = () => {
  const navigate = useNavigate();
  const context = useContext(UserStateContext);

  useEffect(() => {
    if (!context.authenticated) {
      navigate(LOGIN_ROUTE);
    }
  }, [context.authenticated, navigate]);

  return (
    <SidebarProvider>
      {/* 1. Container l-kbir kiy-ched l-screen kamla */}
      <div className="flex h-screen w-full overflow-hidden bg-gray-50">
        
        {/* 2. Sidebar kiy-ji f l-isir */}
        <Sidebarcontext />

        {/* 3. L-jiha l-yamna (Navbar + Content) */}
        <div className="flex flex-col flex-1 overflow-hidden">
          
          {/* Header/Navbar m-fixiya l-foq */}
          <header className="flex h-16 items-center border-b bg-white px-6 shadow-sm">
            {/* Had l-bouton kiy-hll w kiy-sed l-sidebar */}
            <SidebarTrigger className="mr-4 text-gray-600" />
            
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
                School Management
              </span>
            </div>

            <nav className="ml-auto flex items-center gap-6">
              <Link 
                to="/" 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <div className="h-6 w-px bg-gray-200" /> {/* Separator */}
              <StudentDropDown />
            </nav>
          </header>

          {/* Page Content - scrollable bohdou */}
          <main className="flex-1 overflow-y-auto p-8">
            <div className="mx-auto max-w-6xl">
              <Outlet />
            </div>
          </main>
          
        </div>
      </div>
    </SidebarProvider>
  );
};