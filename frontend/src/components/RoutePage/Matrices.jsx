import React from "react";
import GetResponseButton from "./GetResponseButton";
import { useSelector } from "react-redux";
import ResponseMatrices from "./ResponseMatrices";

const Matrices = () => {
  const totalShipment = useSelector((state) => state.shipmentSlice.shipments.length);
  
  return (
    <>
      <div className=" h-[20vh] flex items-center px-2">
        {/* <GetResponseButton /> */}
        <ResponseMatrices />
        
        
      </div>
    </>
  );
};

export default Matrices;
