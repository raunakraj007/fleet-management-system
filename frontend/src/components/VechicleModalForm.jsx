import React, { useState } from "react";
import DeliveryPickupSelector from "./PickupDileverySelector";
import DateTimeInput from "./DateTime";
import App from "../components/Maps/autoComplete/src/app"

const VehicleModalForm = () => {
  const [isPickUp, setIsPickUp] = useState(false);
  const [isDelivery, setIsDelivery] = useState(true);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    pickups: [
      {
        arrivalWaypoint: {
          location: {
            latLng: {
              latitude: "",
              longitude: "",
            },
          },
        },
        timeWindows: [
          {
            startTime: "",
            endTime: "",
          },
        ],
        duration: {
          seconds: "",
        },
        cost: "",
        loadDemands: {
          weight: {
            amount: "",
          },
        },
      },
    ],
    deliveries: [
      {
        arrivalWaypoint: {
          location: {
            latLng: {
              latitude: "",
              longitude: "",
            },
          },
        },
        timeWindows: [
          {
            startTime: "",
            endTime: "",
          },
        ],
        duration: {
          seconds: "",
        },
        cost: "",
        loadDemands: {
          weight: {
            amount: "",
          },
        },
      },
    ],
    loadDemands: {
      weight: {
        amount: "",
      },
    },
    allowedVehicleIndices: [0, 1],
    pickupToDeliveryTimeLimit: "",
    ignore: false,
  });

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const keys = name.split(".");
      const lastKey = keys.pop();
      const nestedObj = keys.reduce((acc, key) => acc[key], prevData);

      if (Array.isArray(nestedObj)) {
        const index = parseInt(keys[keys.length - 1]);
        nestedObj[index][lastKey] = value;
      } else {
        nestedObj[lastKey] = value;
      }

      return { ...prevData };
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      ignore: e.target.checked,
    }));
  };

  // Convert time (HH:mm) to epoch time (seconds)
  const convertTimeToEpoch = (timeString) => {
    const [hours, minutes] = timeString
      .split(":")
      .map((part) => parseInt(part, 10));
    const date = new Date();
    date.setHours(hours, minutes, 0, 0); // Set the time
    return Math.floor(date.getTime() / 1000); // Return epoch time (seconds)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert timeWindows startTime and endTime to epoch seconds for pickups and deliveries
    const updatedPickups = formData.pickups.map((pickup) => ({
      ...pickup,
      timeWindows: pickup.timeWindows.map((window) => ({
        ...window,
        startTime: convertTimeToEpoch(window.startTime),
        endTime: convertTimeToEpoch(window.endTime),
      })),
    }));

    const updatedDeliveries = formData.deliveries.map((delivery) => ({
      ...delivery,
      timeWindows: delivery.timeWindows.map((window) => ({
        ...window,
        startTime: convertTimeToEpoch(window.startTime),
        endTime: convertTimeToEpoch(window.endTime),
      })),
    }));

    setFormData((prevData) => ({
      ...prevData,
      pickups: updatedPickups,
      deliveries: updatedDeliveries,
    }));

    console.log(formData); // Log the form data with epoch times
  };

  return (
    <div>
      <button
        className="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
        onClick={openModal}
      >
        Open Modal2
      </button>

      <div
        className={`modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-900 opacity-50"
          onClick={closeModal}
        />
        <div className="z-50 px-5 py-2 h-[90vh] mx-auto  overflow-y-auto bg-white rounded shadow-lg relative">
          <div className="h-[75vh] w-[800px] ">
            <p className="text-2xl font-bold"></p>
            <h3 className="text-gray-700 text-2xl font-bold">
              <strong>Modal Form</strong>
            </h3>

            <div className="flex">
              {/* form details */}
              <div className=" mt-2 w-[60%]">
                <h3 className="text-gray-700">
                  <strong>Label</strong>
                </h3>
                <input
                  type="text"
                  id="dis"
                  className="border w-1/2 h-10 rounded-md border-gray-300 px-1 mx-2 outline-none "
                />
                <DeliveryPickupSelector
                  setIsDelivery={setIsDelivery}
                  setIsPickUp={setIsPickUp}
                />

                <div className=" scrollbar-hide overflow-y-auto mt-5">
                  <h3 className="text-gray-700">
                    <strong>Coordinates</strong>
                  </h3>
                  <input
                    type="text"
                    placeholder="ex: 31.244945,75.734693"
                    className="border w-2/4 h-10 rounded-md border-gray-300 px-1 mx-2 outline-none "
                  />
                  <h3 className="text-gray-700 mt-4">
                    <strong>Time Window</strong>
                  </h3>
                  <DateTimeInput />
                  <h3>to</h3>
                  <DateTimeInput />

                  <h3 className="text-gray-700">
                    <strong>Select Duration</strong>
                  </h3>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="mt-1 ml-2 block w-2/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />

                  <h3 className="text-gray-700 mt-4">
                    <strong> Cost</strong>
                  </h3>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="border h-10 w-2/4 rounded-md border-gray-300 pl-1 mx-2 outline-none "
                  />
                </div>
              </div>
              {/* map */}
              <div className="w-[40%] h-auto grid grid-rows-6">
                <div className="row-span-5">
                  {/* <App/> */}
                </div>

                <div className="flex h-[80%]  mt-4 justify-end pt-4">
                  <button
                    className="p-3 px-6 py-2 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModalForm;
