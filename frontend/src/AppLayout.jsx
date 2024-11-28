import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginSignUp";
import Sidebar from "./components/Sidebar";

import { AliveScope } from "react-activation";
import { RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import axios from "axios";
import Split from "react-split";
import SideBar2 from "./components/SideBar2"
import SideBarr from "./components/SideBarr";

axios.defaults.withCredentials = true;

const AppLayout = () => {
  const userUid = useSelector((state) => state?.user?.userDetails?.uid);
  return (
    <>
      <AliveScope>
        <div className=" w-full h-[100vh] flex ">
          <Sidebar />
          {/* <SideBar2/> */}
          {/* <SideBarr/> */}
          <div className="w-full scrollbar-hide max-h-screen overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </AliveScope>
    </>
  );
};

const AppLayoutSlider = () => {
  return (
    <Split
      className="split"
      direction="horizontal"
      sizes={[40, 80]}
      style={{ display: "flex", flexDirection: "row" }}
      minSize={[0, 90]}
      // maxSize={[256, Infinity]}
      // gutter={(index, direction) => {
      //   const gutter = document.createElement("div");
      //   gutter.style = {
          
      //     backgroundColor: "red",
      //   };

      //   return gutter;
      // }}
      gutterSize={2}
    >
      <div className="scrollbar-hide-x">
        <Sidebar />
      </div>
      <div className="scrollbar-hide">
        <AliveScope>
          <Outlet />
        </AliveScope>
      </div>
    </Split>
  );
};

export default AppLayout;
