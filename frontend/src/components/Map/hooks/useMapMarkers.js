import { useState, useEffect, useMemo } from "react";
import { getShipmentMarkers } from "../constants";

export const useMapMarkers = (shipments, Routes, routeIndex) => {
  const [markers, setMarkers] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const zIndexes = useMemo(
    () => ({
      hover: markers?.length + 1 ?? 1000,
      selected: markers?.length ?? 999,
    }),
    [markers?.length]
  );

  useEffect(() => {
    const shipmentIndices =
      routeIndex !== null
        ? Routes[routeIndex]?.visits?.map((visit) => visit?.shipmentIndex)
        : null;

    const data = getShipmentMarkers(shipments, shipmentIndices, Routes);
    setMarkers(data);
  }, [shipments, routeIndex, Routes]);

  return {
    markers,
    hoverId,
    selectedId,
    selectedMarker,
    infoWindowShown,
    zIndexes,
    setHoverId,
    setSelectedId,
    setSelectedMarker,
    setInfoWindowShown,
  };
};
