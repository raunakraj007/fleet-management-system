import React from "react";
import { useSelector } from "react-redux";

const TimeBreakDown = () => {

  const metrics = useSelector((state) => state.optimizeRouteRes?.optimizeRouteRes?.metrics);
 


  const timeFormat = {
    // year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
    hour12: false, // 24-hour format
  };

  const timeStr = new Date(metrics?.earliestVehicleStartTime?.seconds * 1000).toLocaleTimeString("en-US", timeFormat);
  const timeEnd = new Date(metrics?.latestVehicleEndTime?.seconds * 1000).toLocaleTimeString("en-US", timeFormat);


  return (
    <div className="bg-white w-10/12 m-auto mt-10 h-[30vh] rounded-xl py-8 px-5">
      <table className="w-10/12 mx-auto">
        <tr>
          <td className="text-gray-600">First Vehicle Start Time: </td>
          <td className="text-gray-600">{timeStr}</td>
        </tr>
        <tr>
          <td className="text-gray-600">Last Vehicle End Time: </td>
          <td className="text-gray-600">{timeEnd}</td>
        </tr>
      </table>
    </div>
  );
};

export default TimeBreakDown;
