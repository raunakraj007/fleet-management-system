import React, { useState } from "react";
import Matrices from "./Matrices";
import GetResponseButton from "./GetResponseButton";
import ResponseMatrices from "./ResponseMatrices";
import SkippedShipment from "./SkippedShipment";
import UsedVehicle from "./UsedVehicle";
import CostTabel from "./CostTabel";
import TimeBreakDown from "./TimeBreakDown";

const ResponseComponent = () => {
  const [displayData, setDisplayData] = useState("");
  return (
    <>
      <div className="bg-gray-200 h-auto max-h-[100vh] overflow-y-auto scrollbar-hide">
        <GetResponseButton/>
        {/* <Matrices /> */}
        <ResponseMatrices setDisplayData = {setDisplayData}/>
        {/* <div className="h-[20vh]">{displayData}</div> */}

        {displayData === "Shipment Done" && <SkippedShipment/>}
        {displayData === "Vehicle Used" &&  <UsedVehicle/>}
        {displayData === "Total Cost" &&  <CostTabel/>}
        {displayData === "Total Time" && <TimeBreakDown/>}
      </div>
    </>
  );
};

export default ResponseComponent;
