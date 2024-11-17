import { Car } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const Card = ({ title, value, setDisplayData }) => {
  return (
    <div
      className="flex flex-col bg-white p-2 border-[1px] shadow-md border-black text-gray-600 rounded-md items-center justify-center w-auto h-1/2"
      onClick={() => setDisplayData(title)}
    >
      <div className="text-blue-600">{title}</div>
      <div className="">{value}</div>
    </div>
  );
};

const ResponseMatrices = ({ setDisplayData }) => {
  const metrics = useSelector(
    (state) => state.optimizeRouteRes?.optimizeRouteRes?.metrics
  );

  const timeFormat = {
    // year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
    hour12: false, // 24-hour format
  };

  const totaltime =
    metrics?.latestVehicleEndTime?.seconds -
    metrics?.earliestVehicleStartTime?.seconds;

  return (
    <div className="w-full h-auto my-3 justify-center flex space-x-5">
      <Card
        title={"Shipment Done"}
        value={metrics?.aggregatedRouteMetrics?.performedShipmentCount}
        setDisplayData={setDisplayData}
      />

      <Card
        title={"Vehicle Used"}
        value={metrics?.usedVehicleCount}
        setDisplayData={setDisplayData}
      />

      <Card
        title={"Total Cost"}
        value={metrics?.totalCost}
        setDisplayData={setDisplayData}
      />

      <Card
        title={"Total Time"}
        value={`${Math.floor(totaltime / 3600)}h ${Math.floor(
          (totaltime % 3600) / 60
        )}min`}
        setDisplayData={setDisplayData}
      />
      <Card
        title={"Total Distance"}
        value={`${Math.floor(
          metrics?.aggregatedRouteMetrics?.travelDistanceMeters / 1000
        )}km`}
      />

      {/* <Card
        title={"First Vehicle Start Time"}
        value={new Date(
          metrics?.earliestVehicleStartTime?.seconds * 1000
        ).toLocaleDateString("en-US", timeFormat)}
      /> */}

      {/* <Card
        title={"Skipped Shipment"}
        value={metrics?.skippedMandatoryShipmentCount}
        setDisplayData={setDisplayData}
      /> */}

      {/* <Card
        title={"Last Vehicle End Time"}
        value={new Date(
          metrics?.latestVehicleEndTime?.seconds * 1000
        ).toLocaleTimeString("en-US", timeFormat)}
      /> */}
    </div>
  );
};

export default ResponseMatrices;
