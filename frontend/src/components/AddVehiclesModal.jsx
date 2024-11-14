import React from "react";
import AddVehicles from "./AddVehicles";

const AddVehiclesModal = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={`modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-900 opacity-50"
          onClick={() => setOpen(false)}
        />
        <div className="z-50 ml-56 mt-20 px-5 py-2  bg-white rounded shadow-lg relative">
          <div className="h-[30vh] w-[500px] ">
            <AddVehicles />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVehiclesModal;
