import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";

const index = ({ id, closeBox }) => {
  let CurrentShipment = null;
  if (id) {
    CurrentShipment = useSelector((state) =>
      state.shipmentSlice.shipments.find((shipment) => shipment._id === id)
    );
  }

  const closeModal = () => {
    setOpen(false);
    closeBox(false);
  };

  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState(null);

  const labl = useRef();
  const loadDemands = useRef();

  const picUpLoc = useRef();
  const picUpDuration = useRef();
  const picUpCost = useRef();

  const delivLoc = useRef();
  const delivDuration = useRef();
  const delivCost = useRef();

  const [pickupTimeStr, setPickupTimeStr] = useState(null);
  const [pickupTimeEnd, setPickupTimeEnd] = useState(null);
  const [deliveryTimeStr, setDeliveryTimeStr] = useState(null);
  const [deliveryTimeEnd, setDeliveryTimeEnd] = useState(null);

  return (
    <div>
      {open && (
        <div
          className={`modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={() => {
              console.log("click");
              closeModal();
            }}
          >
            <div className="z-50 px-5 py-2 h-[90vh] mx-auto  overflow-y-auto bg-white rounded shadow-lg relative">
              <div className="h-[75vh] w-[800px] ">
                <h3 className="text-gray-700 text-2xl font-bold">
                  <strong>{id ? "Edit shipment" : "Add Shipment"}</strong>
                </h3>

                <div className="flex">
                  {/* form */}
                  <Form
                    CurrentShipment={CurrentShipment}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  {/* Map */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
