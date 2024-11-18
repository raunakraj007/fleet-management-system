import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginSignUp";
import Sidebar from "./components/Sidebar";

import { AliveScope } from "react-activation";
import { RouterProvider } from "react-router-dom";

const AppLayout = () => {
  const userUid = useSelector((state) => state?.user?.userDetails?.uid);
  return (
    <>
      <AliveScope>
        <div className=" w-full  flex ">
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
