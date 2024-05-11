import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root.jsx';
import Home from './Pages/Home.jsx';
import Error from './Pages/Error.jsx';
import Eraaa from './Pages/Eraaa.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import LogRegiProtect from './Protected/LogRegiProtect.jsx';
import AddService from './Pages/AddService.jsx';
import ProtectedRout from './Protected/ProtectedRout.jsx';
import AllServices from './Pages/AllServices.jsx';
import ServiceDetils from './Pages/ServiceDetils.jsx';
import axios from 'axios';
import ManageService from './Pages/ManageService.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Eraaa></Eraaa>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element:<LogRegiProtect><Login></Login></LogRegiProtect>,
      },
      {
        path:'/register',
        element:<LogRegiProtect><Register></Register></LogRegiProtect>,
      },
      {
        path:'/addservice',
        element:<ProtectedRout><AddService></AddService></ProtectedRout>
      },
      {
        path:'/allservices',
        element:<AllServices></AllServices>,
      },
      {
        path:'/services/:id',
        element:<ProtectedRout><ServiceDetils></ServiceDetils></ProtectedRout>,
        loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`,{credentials: 'include'})
      },
      {
        path:'/manageservice',
        element:<ProtectedRout><ManageService></ManageService></ProtectedRout>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
