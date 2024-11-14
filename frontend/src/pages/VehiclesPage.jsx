import React from "react";

import { useSelector } from "react-redux";
// import VehiclesList from "../components/VehiclesList";
import VehiclesList from "../components/VehiclePage/VehiclesList";
import EmptyVehiclePage from "../components/VehiclePage/EmptyVehiclePage";
const VehiclesPage = () => {
  const vehicles = useSelector((state) => state.vehiclesSlice.vehicles);
  return (
    <main className="flex-1 h-full overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        {vehicles.length === 0 ? <EmptyVehiclePage /> : <VehiclesList />}
      </div>
    </main>
  );
};

export default VehiclesPage;
