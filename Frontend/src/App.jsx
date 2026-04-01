import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import router from './assets/router/Index';
import UserContext from './Context/UserContext.jsx';

import React from "react";

function App(){
   
  return(
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
   );
  
}
  export default App;
 

