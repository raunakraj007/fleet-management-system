import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const FleetManagement = () => {
  return (
    <div className="pt-16 max-h-80 bg-black w-full">
      <div className="bg-red-500 w-full h-[600px] flex ">
        <Sidebar />
        <div className="w-full scrollbar-hide max-h-[600px] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FleetManagement;
