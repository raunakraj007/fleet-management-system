import React from "react";

const MarkerIcon = ({
  direction = "up",
  size = "20px",
  color = "#FFFFFF",
  arrowColor = "#0057e7",
}) => (
  <svg
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Common Circle Background */}
    <circle cx="12" cy="12" r="10" style={{ fill: color }} />

    {/* Conditional Arrow Path */}
    {direction === "up" ? (
      <path
        d="M15,14a1,1,0,0,1-.71-.29L12,11.41l-2.29,2.3a1,1,0,0,1-1.42-1.42l3-3a1,1,0,0,1,1.42,0l3,3a1,1,0,0,1,0,1.42A1,1,0,0,1,15,14Z"
        style={{ fill: arrowColor }}
      />
    ) : (
      <path
        d="M12,15a1,1,0,0,1-.71-.29l-3-3a1,1,0,0,1,1.42-1.42L12,12.59l2.29-2.3a1,1,0,0,1,1.42,1.42l-3,3A1,1,0,0,1,12,15Z"
        style={{ fill: arrowColor }}
      />
    )}
  </svg>
);

export default MarkerIcon;
