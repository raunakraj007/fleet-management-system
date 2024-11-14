import React from "react";
import VehicleForm from "./VehiclePage/VehicleForm";
import AddVehiclesByFile from "./VehiclePage/AddVehiclesByFile";

const AddVehicles = () => {
  return (
    <div className="flex justify-between">
      <VehicleForm />
      <AddVehiclesByFile/>
    </div>
  );
};

export default AddVehicles;
