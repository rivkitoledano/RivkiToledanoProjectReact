import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArchitecturalSimulations from '../src/components/architecturalSimulations/ArchitecturalSimulations.jsx'
import SingleService from '../src/components/singleService/SingleService.jsx'
import LogIn from './components/logIn/Login.jsx';
import Admin from '../src/components/admin/Admin.jsx'
import ServiceBusinessList from '../src/components/serviceBusinessList/ServiceBusinessList.jsx'
import AppoinmentList from '../src/components/appoinmentList/AppoinmentList.jsx'
const router = createBrowserRouter([

  {
    path: '/',
    element: <ArchitecturalSimulations />,
    errorElement: <div>error architecturalSimulations</div>,
    children: [
      {
        path: ':service',
        element: <SingleService />,
        errorElement: <div>error appointmentPopup not found</div>
      }]
  },

  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error Admin</div>,   
    children: [
      {
        path: 'appointment',
        element:<AppoinmentList/>,
        errorElement: <div>error  not found</div>
      },
      {
        path: 'services',
        element: <ServiceBusinessList/>,
        errorElement: <div>error ServiceBusinessList not found</div>
      },
    
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
