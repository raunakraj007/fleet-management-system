import React, { useState } from "react";
import AddShipmentByFile from "./AddShipmentByFile";
import ShipmentAddFormCall from "./ShipmentAddFormCall";
import ADD_ICON from "../../assets/add-to-queue-svgrepo-com.svg";

const EmptyShipmentPage = () => {
  const [openAddShipment, setOpenAddShipment] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-4">No Shipment found</h1>
        <div className="flex justify-center space-x-3">
          <div
            className="w-[25%] py-4"
            onClick={() => setOpenAddShipment(true)}
          >
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <img src={ADD_ICON} alt="" className="h-full" />
            </div>
          </div>

          <AddShipmentByFile />

          {openAddShipment && (
            <ShipmentAddFormCall closeBox={setOpenAddShipment} />
          )}
        </div>
      </div>
    </>
  );
};

export default EmptyShipmentPage;
