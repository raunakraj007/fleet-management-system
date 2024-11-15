import React from "react";
import EmptyShipmentPage from "../components/ShipmentPage/EmptyShipmentPage";
import ShipmentList from "../components/ShipmentPage/ShipmentList";
import { useSelector } from "react-redux";

const ShipmentPage = () => {
  const shipments = useSelector((state) => state.shipmentSlice.shipments);
  return (
    <main className="flex-1 h-full overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        {shipments.length === 0 ? <EmptyShipmentPage /> : <ShipmentList />}
      </div>
    </main>
  );
};

export default ShipmentPage;
