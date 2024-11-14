import React, { useState } from "react";
import ADD_TRUCK_ICON from "../../assets/addTruck.svg";
import ADD_ICON from "../../assets/add.svg";
// import AddVehiclesModal from "../AddVehiclesModal";
import VehicleForm from "./VehicleForm";
import AddVehiclesByFile from "./AddVehiclesByFile";

const EmptyVehiclePage = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-4">No vehicles found</h1>
        <div className="flex justify-center space-x-3">  
        <VehicleForm id={null} setOpenEditBox={null}/>
        <AddVehiclesByFile/>
        </div>
      </div>
    </>
  );
};

export default EmptyVehiclePage;
