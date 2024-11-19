import React from "react";
import { AdvancedMarkerAnchorPoint } from "@vis.gl/react-google-maps";
import AdvancedMarkerWithRef from "./AdvancedMarkerWithRef";
import { COLORS } from "../constants";
import PICK_UP_ICON from "../../../assets/pickupIcon.png";
import DELIVERY_ICON from "../../../assets/deliverIcon.png";

const MarkerWithVisualization = ({
  id,
  position,
  type,
  zIndex,
  isSelected,
  isHovered,
  onMarkerClick,
  onMouseEnter,
  onMouseLeave,
  routeIndex,
}) => {
  const scale = isSelected || isHovered ? 1.3 : 1;

  return (
    <>
      <AdvancedMarkerWithRef
        position={position}
        zIndex={zIndex}
        anchorPoint={AdvancedMarkerAnchorPoint.BOTTOM_CENTER}
        className="custom-marker"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: AdvancedMarkerAnchorPoint.BOTTOM_CENTER.join(" "),
        }}
        onMarkerClick={(marker) => onMarkerClick(id, marker)}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`custom-html-content ${isSelected ? "selected" : ""}`}
          style={
            routeIndex !== null ? { backgroundColor: COLORS[routeIndex] } : {}
          }
        >
          <img
            src={type === "pickup" ? PICK_UP_ICON : DELIVERY_ICON}
            className="h-full w-1/2"
          />
        </div>
      </AdvancedMarkerWithRef>

      <AdvancedMarkerWithRef
        onMarkerClick={(marker) => onMarkerClick(id, marker)}
        zIndex={zIndex + 1}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={onMouseLeave}
        anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
        position={position}
      >
        <div className="visualization-marker" />
      </AdvancedMarkerWithRef>
    </>
  );
};

export default React.memo(MarkerWithVisualization);
