import React, { useState } from "react";
import { useSelector } from "react-redux";

const index = ({ id, closeBox }) => {
  let CurrentShipment = null;
  if (id) {
    CurrentShipment = useSelector((state) =>
      state.shipmentSlice.shipments.find((shipment) => shipment.id === id)
    );
  }

  const [open, setOpen] = useState(true);

  const [currentShipment, setCurrentShipment] = useState(CurrentShipment);

  return <div>index</div>;
};

export default index;
