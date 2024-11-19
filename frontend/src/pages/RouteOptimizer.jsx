import React, { useState } from "react";
import Split from "react-split";

import MapComponent from "../components/Map/MapComponent";
import ResponseComponent from "../components/RoutePage/ResponseComponent";

const RouteOptimizer = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Split
          className="split "
          direction="vertical"
          sizes={[80, 20]}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ height: "100%" }}>
            <MapComponent />
          </div>
          <div
            style={{ height: "100%" }}
            className="scrollbar-hide h-[100vh] bg-gray-200"
          >
            <ResponseComponent />
          </div>
        </Split>
      </div>
    </>
  );
};

export default RouteOptimizer;
