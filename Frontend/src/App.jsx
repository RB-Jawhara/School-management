import React from "react";
import { RouterProvider } from 'react-router-dom';
import router from './assets/router/Index';
import UserContext from './Context/UserContext.jsx';
import { ThemeProvider } from "./components/Themeprovider"; 

function App() {
  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      {/* 2. UserContext bach n-3rfo l-user wach m-logi aw la */}
      <UserContext>
        
        {/* 3. RouterProvider hwa li kiy-dir l-afichage dial l-pages */}
        <RouterProvider router={router} />
        
      </UserContext>

    </ThemeProvider>
  );
}

export default App;