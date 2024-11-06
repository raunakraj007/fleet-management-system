import React from "react";
import Sidebar from "./Sidebar";
import Container from "./Container";



const ManageContainer = () => {
  return (
    
    <>
      <div className="bg-red-500 w-full h-[576px] flex ">
        <Sidebar />
        <div className="border-2  border-black">
          <Container />
        </div>
      </div>
    </>
  );
};

export default ManageContainer;
