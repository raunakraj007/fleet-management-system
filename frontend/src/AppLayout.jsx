import React from "react";
// import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginSignUp";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  const userUid = useSelector((state) => state?.user?.userDetails?.uid);
  return (
    <>
      <div className=" w-full  flex ">
        <Sidebar />
        <div className="w-full scrollbar-hide max-h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
