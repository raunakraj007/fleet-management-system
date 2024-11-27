import React from "react";
import { Navigate, Outlet,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginSignUp";
import Sidebar from "./components/Sidebar";

import { AliveScope } from "react-activation";
import { RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import axios from "axios";

axios.defaults.withCredentials = true;

const AppLayout = () => {

  const userUid = useSelector((state) => state?.user?.userDetails?.uid);
  return (
    <>
      <AliveScope>
        <div className=" w-full h-[100vh] flex ">
          <Sidebar />
          <div className="w-full scrollbar-hide max-h-screen overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </AliveScope>
    </>
  );
};

export default AppLayout;
