import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const userUid = useSelector((state) => state?.user?.userDetails?.uid);
  return (
    <>
      {userUid && <Header />}
      <Outlet />
    </>
  );
};

export default AppLayout;
