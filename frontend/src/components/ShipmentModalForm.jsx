import React, { useState } from "react";
import DeliveryPickupSelector from "./PickupDileverySelector";
import DateTimeInput from "./DateTime";

const ShipmentModalForm = () => {
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
        <div className="z-50 w-3/4 mx-auto overflow-y-auto bg-white rounded shadow-lg md:max-w-3xl relative">
          <div
            className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer"
            onClick={closeModal}
          >
            <svg
              className="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
            <span className="text-sm">(Esc)</span>
          </div>

          <div className="px-6 py-4 text-left">
            <div className="flex items-center justify-between pb-3">
              <p className="text-2xl font-bold">Modal Form</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="w-4/6">
                  <div>
                    <label>Display Name</label>
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      className="input"
                    />
                  </div>

                  {/* toggle Section */}
                  <DeliveryPickupSelector
                    setIsDelivery={setIsDelivery}
                    setIsPickUp={setIsPickUp}
                  />
                  <br />

                  {/* Pickups Section */}
                  {isPickUp && (
                    <div>
                      <h3>Pickups</h3>
                      {formData.pickups.map((pickup, index) => (
                        <div key={index}>
                          <div>
                            <h4>Pickup {index + 1}</h4>
                            <label>Latitude</label>
                            <input
                              type="number"
                              name={`pickups.${index}.arrivalWaypoint.location.latLng.latitude`}
                              value={
                                pickup.arrivalWaypoint.location.latLng.latitude
                              }
                              onChange={handleInputChange}
                              className="input"
                            />

                            <label>Longitude</label>
                            <input
                              type="number"
                              name={`pickups.${index}.arrivalWaypoint.location.latLng.longitude`}
                              value={
                                pickup.arrivalWaypoint.location.latLng.longitude
                              }
                              onChange={handleInputChange}
                              className="input"
                            />
                          </div>

                          <div>
                            <h4>Time Windows</h4>
                            {pickup.timeWindows.map((window, timeIndex) => (
                              <div key={timeIndex}>
                                <label>Start Time</label>
                                <input
                                  type="time"
                                  name={`pickups.${index}.timeWindows.${timeIndex}.startTime`}
                                  value={window.startTime}
                                  onChange={handleInputChange}
                                  className="input"
                                />

                                <label>End Time</label>
                                <input
                                  type="time"
                                  name={`pickups.${index}.timeWindows.${timeIndex}.endTime`}
                                  value={window.endTime}
                                  onChange={handleInputChange}
                                  className="input"
                                />
                              </div>
                            ))}
                          </div>

                          <div>
                            <label>Duration (seconds)</label>
                            <input
                              type="number"
                              name={`pickups.${index}.duration.seconds`}
                              value={pickup.duration.seconds}
                              onChange={handleInputChange}
                              className="input"
                            />

                            <label>Cost</label>
                            <input
                              type="number"
                              name={`pickups.${index}.cost`}
                              value={pickup.cost}
                              onChange={handleInputChange}
                              className="input"
                            />
                          </div>

                          <div>
                            <label>Load Weight</label>
                            <input
                              type="number"
                              name={`pickups.${index}.loadDemands.weight.amount`}
                              value={pickup.loadDemands.weight.amount}
                              onChange={handleInputChange}
                              className="input"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Deliveries Section */}
                  {isDelivery && (
                    <div>
                      <h3>Deliveries</h3>
                      <label>Coordinates</label>
                      <input
                        type="text"
                        name=""
                        value={`${formData?.deliveries[0]?.arrivalWaypoint?.location?.latLng?.latitude},${formData?.deliveries[0]?.arrivalWaypoint?.location?.latLng?.longitude}`}
                      />

                      <label>Duration </label>
                      <input
                        type="number"
                        // name={}
                        // value={formData?.deliveries[0]?.duration?.seconds}
                        onChange={handleInputChange}
                        className=""
                      />

                      <label>Cost</label>
                      <input
                        type="number"
                        value={formData?.deliveries[0]?.cost}
                        onChange={handleInputChange}
                        className="input border-black border-2"
                      />

                      <div className="w-full">
                        <DateTimeInput />
                      </div>
                      <div className="w-full">
                        <DateTimeInput />
                      </div>
                    </div>
                  )}

                  {/* Final Controls */}
                  {/* <div>
                    <label>Ignore</label>
                    <input
                      type="checkbox"
                      name="ignore"
                      checked={formData.ignore}
                      onChange={handleCheckboxChange}
                    />
                  </div> */}
                </div>
                <div>
                  {/* Map */}
                  <div className="w-44 h-44 bg-black"></div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentModalForm;
