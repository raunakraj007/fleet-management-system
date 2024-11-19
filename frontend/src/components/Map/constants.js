export const MAPS_CONFIG = {
  defaultZoom: 12,
  defaultCenter: { lat: 31.234875, lng: 75.804975 },
  mapId: "bf51a910020fa25a",
};

export const COLORS = [
  "#f57c00",
  "#c2185b",
  "#7b1fa2",
  "#d32f2f",
  "#00796b",
  "#0097a7",
  "#e64a19",
  "#512da8",
  "#ffa000",
  "#a2acb1",
  "#455a64",
  "#1976d2",
  "#5d4037",
  "#388e3c",
  "#616161",
  "#303f9f",
  "#0288d1",
  "#689f38",
  "#afb42b",
  "#fbc02d",
  "#555555",
];

export const getRouteIndex = (Routes, shipmentIndex) => {
  console.log(Routes);
  let routeIndex = null;
  Routes?.forEach((route, index) => {
    if (
      route?.visits?.find(
        (visit) => visit?.shipmentIndex === Number(shipmentIndex)
      )
    ) {
      routeIndex = index;
    }
  });
  return routeIndex;
};

export const getShipmentMarkers = (shipments, shipmentIndicies, Routes) => {
  console.log("Inside getData2");
  const data = [];

  shipments.forEach((shipment, index) => {
    if (
      shipmentIndicies &&
      shipmentIndicies?.length > 0 &&
      !shipmentIndicies.includes(index)
    ) {
      return;
    }
    if (shipment?.pickups && shipment?.pickups?.length > 0) {
      data.push({
        position: {
          lat: shipment.pickups[0].arrivalWaypoint.location.latLng.latitude,
          lng: shipment.pickups[0].arrivalWaypoint.location.latLng.longitude,
        },
        zIndex: index,
        id: String(index),
        type: "pickup",
        key: `pickup-${index}`,
        routeIndex: getRouteIndex(Routes, index),
      });
    }

    if (shipment?.deliveries && shipment?.deliveries?.length > 0) {
      data.push({
        position: {
          lat: shipment.deliveries[0].arrivalWaypoint.location.latLng.latitude,
          lng: shipment.deliveries[0].arrivalWaypoint.location.latLng.longitude,
        },
        zIndex: index,
        id: String(index),
        type: "delivery",
        key: `delivery-${index}`,
        routeIndex: getRouteIndex(Routes, index),
      });
    }
  });

  console.log(data.length);

  return data;
};
