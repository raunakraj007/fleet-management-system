import React, { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import { useDispatch, useSelector } from "react-redux";
import VehicleForm from "./VehicleForm";
import AddVehiclesByFile from "./AddVehiclesByFile";
import DeleteIcon from "../../assets/delete-1-svgrepo-com.svg";
import ConfirmationModal from "../ConfirmationModal";
import { removeAllVehicles } from "../../redux/vehiclesSlice";

const VehiclesList = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehiclesSlice.vehicles);
  const [open, setOpen] = useState(false);
  const [openEditBox, setOpenEditBox] = useState(false);
  const [id, setId] = useState(null);

  
  const deleteAllVehicles = () => {
    dispatch(removeAllVehicles());
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              setId={setId}
              setOpenEditBox={setOpenEditBox}
            />
          ))}
        </div>
        <div className="flex space-x-2 mt-6 align-baseline">
          <VehicleForm />
          <AddVehiclesByFile />
          <div className="w-[25%] h-[25%] cursor-pointer hover:scale-[1.01] mt-4 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <img src={DeleteIcon} alt="" onClick={() => setOpen(true)} />
          </div>
        </div>

        <ConfirmationModal
          open={open}
          setOpen={setOpen}
          Confirm={deleteAllVehicles}
        />
      </div>
      {openEditBox && <VehicleForm id={id} setOpenEditBox={setOpenEditBox} />}
    </>
  );
};

export default VehiclesList;
