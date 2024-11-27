import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VehicleCard from "./VehicleCard";
import VehicleFormCall from "./VehicleFormCall";
import VehicleForm from "./Form/index";
import ConfirmationModal from "../ConfirmationModal";
import axios from "axios";
import { deleteVehicleByID } from "../../redux/vehiclesSlice";

const VehiclesList = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehiclesSlice.vehicles);

  const [openEditBox, setOpenEditBox] = useState(false);
  const [editId, setEditId] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle._id}
              vehicle={vehicle}
              setId={setEditId}
              setOpenEditBox={setOpenEditBox}
              setOpenAlert={setOpenAlert}
            />
          ))}
        </div>
      </div>
      {/* {openEditBox && <VehicleFormCall id={editId} closeBox={setOpenEditBox} />} */}
      {openEditBox && <VehicleForm id={editId} closeBox={setOpenEditBox} />}
      {openAlert && (
        <ConfirmationModal
          open={openAlert}
          setOpen={setOpenAlert}
          Confirm={() => {
            console.log("Delete Vehicle");
            axios
              .post(
                `${
                  import.meta.env.VITE_BACKEND_URL
                }/vehicles/deleteVehicle/${editId}`
              )
              .then((res) => {
                console.log(res);
                dispatch(deleteVehicleByID(editId));
                setEditId(null);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      )}
    </>
  );
};

export default VehiclesList;
