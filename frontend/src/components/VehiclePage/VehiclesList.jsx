import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VehicleCard from "./VehicleCard";
import VehicleFormCall from "./VehicleFormCall";

const VehiclesList = () => {
  const vehicles = useSelector((state) => state.vehiclesSlice.vehicles);

  const [openEditBox, setOpenEditBox] = useState(false);
  const [editId, setEditId] = useState(null);

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              setId={setEditId}
              setOpenEditBox={setOpenEditBox}
            />
          ))}
        </div>
      </div>
      {openEditBox && <VehicleFormCall id={editId} closeBox={setOpenEditBox} />}
    </>
  );
};

export default VehiclesList;
