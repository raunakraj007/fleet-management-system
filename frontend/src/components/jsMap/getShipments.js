export function getData2(shipments) {
  console.log("Inside getData2");
  const visits = [];

  shipments.forEach((shipment) => {
    if (shipment?.pickups && shipment?.pickups?.length > 0) {
      // console.log("pick");
      // console.log(shipment.pickups[0].arrivalWaypoint.location.latLng.latitude);
      // console.log(
      //   shipment.pickups[0].arrivalWaypoint.location.latLng.longitude
      // );
      visits.push({
        lat: shipment.pickups[0].arrivalWaypoint.location.latLng.latitude,
        lng: shipment.pickups[0].arrivalWaypoint.location.latLng.longitude,
      });
    }

    if (shipment?.deliveries && shipment?.deliveries?.length > 0) {
      // console.log("ship");
      // console.log(
      //   shipment.deliveries[0].arrivalWaypoint.location.latLng.latitude
      // );
      // console.log(
      //   shipment.deliveries[0].arrivalWaypoint.location.latLng.longitude
      // );
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
    type: index === 2 ? "pin" : "html",
  }));

  return data;
}
