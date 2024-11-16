import React from "react";
import FleetScenario from "../components/FleetScenario";

const ManageFleet = () => {
  return (
    <div className="flex-1 flex justify-around overflow-x-hidden overflow-y-auto bg-gray-200 mx-auto px-6 py-8 h-[100vh]">
      <FleetScenario />
    </div>
  );
};

export default ManageFleet;
