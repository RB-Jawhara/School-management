import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './assets/router/index.jsx'

const App = () => {
 

  return (
    <>
      <RouterProvider router={router} />
      
     
    </>
  )
}

export default App
