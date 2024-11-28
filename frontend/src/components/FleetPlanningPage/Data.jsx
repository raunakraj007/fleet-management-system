import React from "react";
import MatrixBar from "./MatrixBar";
import UsedVehicle from "../RoutePage/UsedVehicle";
import ResponseSimmer from "./ResponseSimmer";

const Data = ({setIsPlan}) => {
  return (
    <div className="h-[100vh] ">
      {/* <ResponseSimmer /> */}
      <MatrixBar setIsPlan={setIsPlan} />

      <UsedVehicle />
    </div>
  );
};

export default Data;
