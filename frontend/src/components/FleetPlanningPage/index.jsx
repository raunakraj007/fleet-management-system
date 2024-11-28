import React, { useState } from "react";
import Map from "../Map/MapComponent";
import { Dice1 } from "lucide-react";
import FleetScenario from "./FleetScenario";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import Response from "./Response";

const index = () => {
  const [isPlan, setIsPlan] = useState(true);

  return (
    <div className="bg-gray-200">
      {/* <TopBar setIsPlan={setIsPlan} isPlan={isPlan} /> */}
      {isPlan ? <FleetScenario setIsPlan={setIsPlan} /> : <Response setIsPlan={setIsPlan}/>}
    </div>
  );
};

export default index;
