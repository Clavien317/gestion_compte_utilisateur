import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Inscrir from './pages/Inscrir.jsx'
import Login from './pages/Login.jsx'
import Dashbord from './pages/Dashbord.jsx'



const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <App />
    },
    {
      path:"/inscrir",
      element: <Inscrir />
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path:"/dashboard",
      element:<Dashbord />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
