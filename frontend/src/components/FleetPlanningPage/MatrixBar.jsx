import React from "react";
import { useSelector } from "react-redux";
import { calculateTimeDifference } from "./utils";

const MatrixBar = ({setIsPlan}) => {
  const res = useSelector((state) => state.optimizeRouteRes?.optimizeRouteRes);
  const totaltime = calculateTimeDifference(res?.metrics?.earliestVehicleStartTime ,res?.metrics?.latestVehicleEndTime)

  const totalDistance =
    res?.metrics?.aggregatedRouteMetrics?.travelDistanceMeters;

  console.log(totaltime);
  return (
    <div className="w-[90%] h-20 py-3 bg-gray-100 m-auto flex mt-4 rounded-lg justify-center items-center space-x-5 shadow-md">
      <Card
        title={"Shipment Done"}
        value={res?.metrics?.aggregatedRouteMetrics?.performedShipmentCount}
        setDisplayData={() => {}}
      />

      <Card
        title={"Vehicle Used"}
        value={res?.metrics?.usedVehicleCount}
        setDisplayData={() => {}}
      />

      <Card
        title={"Total Cost"}
        value={Math.floor(res?.metrics?.totalCost)}
        setDisplayData={() => {}}
      />

      <Card
        title={"Total Time"}
        value={totaltime}
        setDisplayData={() => {}}
      />

      <Card
        title={"Total Distance"}
        value={`${Math.floor(totalDistance / 1000)} km`}
        setDisplayData={() => {}}
      />

      <div
        className="flex flex-col bg-gradient-to-r from-green-500 to-green-700 p-4 border-[1px] shadow-lg border-gray-300 text-white rounded-lg items-center justify-center w-auto cursor-pointer h-[95%] transition-transform transform hover:scale-105 hover:shadow-2xl"
        onClick={() =>setIsPlan(true)}
      >
        <div className="text-xl font-bold">Edit Plan</div>
      </div>
    </div>
  );
};

const Card = ({ title, value, setDisplayData }) => {
  return (
    <div
      className="flex flex-col bg-gradient-to-r from-blue-500 to-indigo-600 p-4 border-[1px] shadow-lg border-gray-300 text-white rounded-lg items-center justify-center w-auto cursor-pointer h-[95%] transition-transform transform hover:scale-105 hover:shadow-2xl"
      onClick={() => setDisplayData()}
    >
      <div className=" font-bold">{title}</div>
      <div className="text-xl font-semibold mt-2">{value}</div>
    </div>
  );
};

export default MatrixBar;
