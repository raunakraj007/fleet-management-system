import React from "react";
import { Polyline } from "./polyline";
import { COLORS } from "../constants";

const RoutePolylines = ({ polyLines, routeIndex }) => {
  if (!polyLines?.length) return null;

  return polyLines.map((polyLine, index) => (
    <Polyline
      key={index}
      strokeWeight={2}
      strokeColor={routeIndex !== null ? COLORS[routeIndex] : COLORS[index]}
      encodedPath={polyLine}
    />
  ));
};

export default React.memo(RoutePolylines);
