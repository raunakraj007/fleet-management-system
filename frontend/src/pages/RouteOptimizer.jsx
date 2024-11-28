import React, { useState } from "react";
import Split from "react-split";

import MapComponent from "../components/Map/MapComponent";
import ResponseComponent from "../components/RoutePage/ResponseComponent";
import FleePlanning from "../components/FleetPlanningPage/index";
import FleetManagement from "../components/bin/FleetManagement";

const RouteOptimizer = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Split
          className="split"
          direction="vertical"
          sizes={[80, 20]}
          minSize={[10,10]}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ height: "100%" }}>
            <MapComponent />
          </div>
          <div
            style={{ height: "100%" }}
            className="scrollbar-hide  bg-gray-200"
          >
            {/* <ResponseComponent /> */}
            <FleePlanning />
          </div>
        </Split>
      </div>
    </>
  );
};

export default RouteOptimizer;
