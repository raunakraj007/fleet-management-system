import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginSignUp";

const AppLayout = () => {
  const userUid = useSelector((state) => state?.user?.userDetails?.uid);
  return (
    <>

      {/* {userUid && <Header />} */}
      {/* {userUid ===undefined?<LoginPage/>:<Outlet/>} */}

      {/* for dev purpose */}
      <Header/>
      <Outlet />
    </>
  );
};

export default AppLayout;
