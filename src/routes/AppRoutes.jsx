import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from '../app/layout/authLayout';
import Login from '../features/auth/ui/pages/Login';
import Register from '../features/auth/ui/pages/Register';
import DashBoardLayout from '../app/layout/DashBoardLayout';
import Home from '../features/dashBoard/ui/pages/Home';
const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <AuthLayout/>,
            children : [
                {
                    path: '',
                    element: <Login/>
                },
                {
                    path: 'register',
                    element: <Register/>
                }
            ]
        },
        {
            path: '/home',
            element: <DashBoardLayout/>,
            children: [
                {
                    path: '',
                    element: <Home/>
                }
            ]

        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes