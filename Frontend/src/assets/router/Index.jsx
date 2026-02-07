import { createBrowserRouter } from "react-router-dom";

import { Login } from "../Pages/Login.jsx";
import { Register } from "../Pages/register.jsx";
import { Users } from "../Pages/Users.jsx";
import Home from "../Pages/Home.jsx";
import { NotFound } from "../Pages/NotFound.jsx";
import { Layout } from "../Layouts/Layout.jsx";


const router = createBrowserRouter([
{
    element: <Layout/>,
    children:[
    {
    path: "/",
    element: <Home />},
    {
    path: "/login",
    element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/Users",
        element: <Users />
        
    },{
    path: "*",
    element: <NotFound />}
   
    ]
}
])
    ;

export default router;
