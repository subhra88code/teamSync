import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../app/layout/authLayout";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";
import DashBoardLayout from "../app/layout/DashBoardLayout";
import { useDispatch } from "react-redux";
import { currentLoggedinEmployeee } from "../features/auth/state/authAction";
import PublicRoute from "./protectedRoutes/PublicRoute";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
const AppRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLoggedinEmployeee());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
       {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashBoardLayout />,
          children: [
            ...commonRoutes,
            {
              element: <RoleBaseRoute allowedRoles={"admin"} />,
              children: adminRoutes,
            },
            {
              element: <RoleBaseRoute allowedRoles={"employee"} />,
              children: employeeRoutes,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;


};

export default AppRoutes;
