export function getData2(shipments, shipmentIndicies) {
  console.log("Inside getData2");
  const visits = [];

  shipments.forEach((shipment, index) => {
    if (shipmentIndicies && shipmentIndicies?.length > 0 && !shipmentIndicies.includes(index)) {
      return;
    }
    if (shipment?.pickups && shipment?.pickups?.length > 0) {
      visits.push({
        lat: shipment.pickups[0].arrivalWaypoint.location.latLng.latitude,
        lng: shipment.pickups[0].arrivalWaypoint.location.latLng.longitude,
      });
    }

    if (shipment?.deliveries && shipment?.deliveries?.length > 0) {
      visits.push({
        lat: shipment.deliveries[0].arrivalWaypoint.location.latLng.latitude,
        lng: shipment.deliveries[0].arrivalWaypoint.location.latLng.longitude,
      });
    }
  });

  console.log(visits);

  const data = visits.map((visit, index) => ({
    id: String(index),
    position: { lat: visit.lat, lng: visit.lng },
    zIndex: index,
    // type: index === 2 ? "pin" : "html",
    type: "html",
  }));

  return data;
}
