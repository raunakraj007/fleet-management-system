import React, { useEffect } from "react";
import { getRouteIndex } from "./constants";

const InfoWindowContent = ({ markerId, Routes, shipments }) => {
  const routeIndex = getRouteIndex(Routes, markerId);

  const visitIndex = Routes?.[routeIndex]?.visits.findIndex(
    (visit) => visit?.shipmentIndex === Number(markerId)
  );

  const isPickUp = Routes?.[routeIndex]?.visits?.[visitIndex]?.isPickup;

  const startTime =
    Routes?.[routeIndex]?.visits?.[visitIndex]?.startTime?.seconds;

  const duration = isPickUp
    ? shipments?.[Number(markerId)]?.pickups?.[0]?.duration?.seconds
    : shipments?.[Number(markerId)]?.deliveries?.[0]?.duration?.seconds;

  const endTime = Number(startTime) + Number(duration);

  return (
    <div className="">
      <h2 className="font-semibold text-xl">{shipments?.[markerId]?.label}</h2>
      {startTime && endTime && (
        <>
          <p>{new Date(startTime * 1000).toLocaleString()}</p>
          <p>{new Date(endTime * 1000).toLocaleString()}</p>
        </>
      )}
    </div>
  );
};

export default InfoWindowContent;
