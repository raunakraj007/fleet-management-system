import React from "react";
import { Users } from "lucide-react";
// import Shipments from "../Shipments";
// import JsonFileUploader from "../Input";
import JsonFileReader from "./JsonFileReader";
import addIcon from "../assets/add.svg";
import del from "../assets/bin.svg";
import edit from "../assets/edit.svg";
// import FormModal from "../ShipmentForm";
// import Modal from "../Modal";
import ShipmentModalForm from "./ShipmentModalForm";
import { removeAllShipments } from "../redux/shipmentSlice";
import { useDispatch } from "react-redux";

import ShipmentTable from "./ShipmentTabel";

const Shipment = () => {
  const dispatch = useDispatch();
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8 h-[100vh]">
        <div className="h-full">
          <h3 className="text-3xl font-medium text-gray-700">Shipments</h3>

          <div className="flex align-baseline justify-around ">
            <ShipmentModalForm />
            <JsonFileReader />
            <img
              onClick={() => {
                dispatch(removeAllShipments());
              }}
              src={del}
              alt=""
              className="w-14 hover:scale-110 transition-transform duration-200"
            />
          </div>

          <ShipmentTable />
        </div>
      </div>
    </main>
  );
};

export default Shipment;
