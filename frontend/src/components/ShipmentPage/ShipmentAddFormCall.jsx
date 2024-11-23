import React, { useEffect, useRef, useState } from "react";
import DeliveryPickupSelector from "../PickupDileverySelector";
import DateTimeInput from "../DateTime";
import App from "../Maps/autoComplete/src/app";
import AutoCompleteMap from "../AutoComplete/main";
import addIcon from "../../assets/add.svg";
import ADD_ICON from "../../assets/add-to-queue-svgrepo-com.svg";
import { addShipments, editShipmentByID } from "../../redux/shipmentSlice";
import { useDispatch, useSelector } from "react-redux";
import AUTO_COMPLETE_ACTIVE_ICON from "../../assets/auto-complete-active.png"
import AUTO_COMPLETE_INACTIVE_ICON from "../../assets/auto-complete-iactive.png"

const ShipmentAddFormCall = ({ id, closeBox }) => {
  console.log("in Shipment Modal");
  let shipment = null;
  if (id) {
    console.log("in ID");
    shipment = useSelector((state) =>
      state.shipmentSlice.shipments.find((shipment) => shipment.id === id)
    );
  }
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [isPickUp, setIsPickUp] = useState(true);
  const [isDelivery, setIsDelivery] = useState(false);
  const [pickupTimeStr, setPickupTimeStr] = useState(null);
  const [pickupTimeEnd, setPickupTimeEnd] = useState(null);
  const [deliveryTimeStr, setDeliveryTimeStr] = useState(null);
  const [deliveryTimeEnd, setDeliveryTimeEnd] = useState(null);

  const labl = useRef();
  const loadDemands = useRef();

  const picUpLoc = useRef();
  const picUpDuration = useRef();
  const picUpCost = useRef();

  const delivLoc = useRef();
  const delivDuration = useRef();
  const delivCost = useRef();

  const closeModal = () => {
    setOpen(false);
    closeBox(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const convertSecondsToTime = (seconds) => {
    if (seconds === null) return "00:00";
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60); // Use String.prototype.padStart to ensure two digits
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  };

  const timeStringToSeconds = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60;
  };

  const handleSubmitButton = () => {
    console.log("submit button clicked");

    const name = labl?.current?.value;
    const picUpLocation = picUpLoc?.current?.value;
    const picCost = picUpCost?.current?.value;
    const delivLocation = delivLoc?.current?.value;
    const deliCost = delivCost?.current?.value;

    console.log("name:", name);
    console.log("picUpLocation:", picUpLocation);
    console.log("picCost:", picCost);
    console.log("delivLocation:", delivLocation); // Ensure this logs the expected value
    console.log("deliCost:", deliCost); // Ensure this logs the expected value

    const Shipment = {};
    if (id) {
      Shipment.id = id;
    }
    console.log(Shipment);

    if (name) {
      Shipment.label = name.toString();
      console.log("Shipment.displayName:", Shipment.label);
    }

    if (loadDemands?.current?.value) {
      Shipment.loadDemands = {
        weight: {
          amount: loadDemands.current.value.toString(),
        },
      };
      console.log("Shipment.loadDemands:", Shipment.loadDemands);
    } else {
      console.log("Load demands not provided");
    }

    if (picUpLocation) {
      const [strLat, strLng] = picUpLocation.split(",").map(Number);
      Shipment.pickups = [
        {
          arrivalWaypoint: {
            location: {
              latLng: {
                latitude: strLat,
                longitude: strLng,
              },
            },
          },
        },
      ];
      console.log("Shipment.pickups:", Shipment.pickups);
    } else {
      console.log("Pickup location not provided");
    }

    if (picUpDuration?.current?.value) {
      if (Shipment.pickups && Shipment.pickups.length > 0) {
        Shipment.pickups[0].duration = {
          seconds: timeStringToSeconds(picUpDuration.current.value.toString()),
        };
        console.log(
          "Shipment.pickups[0].duration:",
          Shipment.pickups[0].duration
        );
      } else {
        console.log(
          "Pickup duration provided, but no pickup location to attach it to"
        );
      }
    }

    if (picCost) {
      if (Shipment.pickups && Shipment.pickups.length > 0) {
        Shipment.pickups[0].cost = Number(picCost);
        console.log("Shipment.pickups[0].cost:", Shipment.pickups[0].cost);
      } else {
        console.log(
          "Pickup cost provided, but no pickup location to attach it to"
        );
      }
    }

    if (pickupTimeStr || pickupTimeEnd) {
      if (Shipment.pickups && Shipment.pickups.length > 0) {
        Shipment.pickups[0].timeWindows = [
          {
            startTime: {
              seconds:
                pickupTimeStr == "946665000" ? null : pickupTimeStr.toString(),
            },

            endTime: {
              seconds:
                pickupTimeEnd == "946665000" ? null : pickupTimeEnd.toString(),
            },
          },
        ];
        console.log(
          "Shipment.pickups[0].timeWindows:",
          Shipment.pickups[0].timeWindows
        );
      } else {
        console.log(
          "Pickup time window provided, but no pickup location to attach it to"
        );
      }
    }

    if (delivLocation) {
      const [strLat, strLng] = delivLocation.split(",").map(Number);
      Shipment.deliveries = [
        {
          arrivalWaypoint: {
            location: {
              latLng: {
                latitude: strLat,
                longitude: strLng,
              },
            },
          },
        },
      ];
      console.log("Shipment.deliveries:", Shipment.deliveries);
    } else {
      console.log("Delivery location not provided");
    }

    if (deliCost) {
      if (Shipment.deliveries && Shipment.deliveries.length > 0) {
        Shipment.deliveries[0].cost = Number(deliCost);
        console.log(
          "Shipment.deliveries[0].cost:",
          Shipment.deliveries[0].cost
        );
      } else {
        console.log(
          "Delivery cost provided, but no delivery location to attach it to"
        );
      }
    }

    if (delivDuration?.current?.value) {
      if (Shipment.deliveries && Shipment.deliveries.length > 0) {
        Shipment.deliveries[0].duration = {
          seconds: timeStringToSeconds(delivDuration.current.value.toString()),
        };
        console.log(
          "Shipment.deliveries[0].duration:",
          Shipment.deliveries[0].duration
        );
      } else {
        console.log(
          "Delivery duration provided, but no delivery location to attach it to"
        );
      }
    }

    if (deliveryTimeStr || deliveryTimeEnd) {
      if (Shipment.deliveries && Shipment.deliveries.length > 0) {
        Shipment.deliveries[0].timeWindows = [
          {
            startTime: {
              seconds:
                deliveryTimeStr == "946665000"
                  ? null
                  : deliveryTimeStr.toString(),
            },

            endTime: {
              seconds:
                deliveryTimeEnd == "946665000"
                  ? null
                  : deliveryTimeEnd.toString,
            },
          },
        ];
        console.log(
          "Shipment.deliveries[0].timeWindows:",
          Shipment.deliveries[0].timeWindows
        );
      } else {
        console.log(
          "Delivery time window provided, but no delivery location to attach it to"
        );
      }
    }

    console.log("Final Shipment Object:", Shipment);

    const removeNullValues = (obj) => {
      const isObject = (value) =>
        value && typeof value === "object" && !Array.isArray(value);
      const isArray = Array.isArray;

      const cleanedObject = Object.entries(obj).reduce((acc, [key, value]) => {
        if (
          value !== null &&
          value !== undefined &&
          value !== "" &&
          value !== false &&
          value !== 0 &&
          value !== "false" &&
          value !== "0" &&
          value !== "null" &&
          value !== "undefined"
        ) {
          if (isObject(value)) {
            acc[key] = removeNullValues(value);
          } else if (isArray(value)) {
            acc[key] = value
              .filter(
                (item) =>
                  item !== null &&
                  item !== undefined &&
                  item !== "" &&
                  item !== false &&
                  item !== 0 &&
                  item !== "false" &&
                  item !== "0" &&
                  item !== "null" &&
                  item !== "undefined"
              )
              .map((item) =>
                isObject(item) || isArray(item) ? removeNullValues(item) : item
              );
          } else {
            acc[key] = value;
          }
        }
        return acc;
      }, {});

      return cleanedObject;
    };

    const cleanedShipment = removeNullValues(Shipment);
    console.log("Cleaned Shipment Object:", cleanedShipment);

    if (id) {
      dispatch(editShipmentByID({ id: id, data: cleanedShipment }));
    } else {
      console.log("not id");
      dispatch(addShipments([cleanedShipment]));
    }

    closeModal();
  };

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
          />
          <div className="z-50 px-5 py-2 h-[90vh] mx-auto  overflow-y-auto bg-white rounded shadow-lg relative">
            <div className="h-[75vh] w-[800px] ">
              <p className="text-2xl font-bold"></p>
              <h3 className="text-gray-700 text-2xl font-bold">
                <strong>{id ? "Edit shipment" : "Add Shipment"}</strong>
              </h3>

              <div className="flex">
                {/* form details */}
                <div className=" flex-1 mt-2  pt-6 max-h-[74vh] overflow-y-auto scrollbar-hide ">
                  {/* DisplayName */}
                  <div className="relative w-full max-w-xs">
                    <input
                      defaultValue={shipment?.label ?? ""}
                      type="text"
                      className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                      placeholder=" "
                      required
                      ref={labl}
                    />
                    <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                      Label
                    </label>
                  </div>

                  {/* Load Demands */}
                  <div className="relative w-full max-w-xs mt-7">
                    <input
                      type="number"
                      className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                      placeholder=" "
                      required
                      defaultValue={shipment?.loadDemands?.weight?.amount ?? ""}
                      ref={loadDemands}
                    />
                    <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                      Weight
                    </label>
                  </div>

                  <DeliveryPickupSelector
                    setIsDelivery={setIsDelivery}
                    setIsPickUp={setIsPickUp}
                  />

                  {/* Pickups Section */}
                  <>
                    <div className={isPickUp ? "block" : "hidden"}>
                      {/* Location */}
                      <div className="relative w-full max-w-xs mt-7">
                        <input
                          type="text"
                          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                          placeholder=" "
                          required
                          defaultValue={`${
                            shipment?.pickups?.[0]?.arrivalWaypoint?.location
                              ?.latLng?.latitude ?? ""
                          }${
                            shipment?.pickups?.[0]?.arrivalWaypoint?.location
                              ?.latLng?.longitude != null
                              ? `, ${shipment?.pickups?.[0]?.arrivalWaypoint?.location?.latLng?.longitude}`
                              : ""
                          }`}
                          ref={picUpLoc}
                        />
                        <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                          Location
                        </label>

                        {/* <img src={} alt="" /> */}
                      </div>

                      {/* Time*/}
                      <h3 className="text-gray-700 mt-4">Time Window</h3>
                      <DateTimeInput
                        setTimee={setPickupTimeStr}
                        currentTime={
                          Number(
                            shipment?.pickups?.[0]?.timeWindows?.[0]?.startTime
                              ?.seconds
                          ) ?? null
                        }
                      />
                      <h3>to</h3>
                      <DateTimeInput
                        setTimee={setPickupTimeEnd}
                        currentTime={
                          Number(
                            shipment?.pickups?.[0]?.timeWindows?.[0]?.endTime
                              ?.seconds
                          ) ?? null
                        }
                      />

                      {/* Duration */}
                      <h3 className="text-gray-700">
                        <strong>Select Duration</strong>
                      </h3>
                      <input
                        type="time"
                        id="time"
                        ref={picUpDuration}
                        name="time"
                        defaultValue={convertSecondsToTime(
                          shipment?.pickups?.[0]?.duration?.seconds ?? null
                        )}
                        className="mt-1 ml-2 block w-2/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />

                      {/* cost  */}
                      <div className="relative w-1/3 max-w-xs mt-7">
                        <input
                          type="number"
                          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                          placeholder=" "
                          required
                          defaultValue={shipment?.pickups?.[0]?.cost ?? ""}
                          ref={picUpCost}
                        />
                        <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                          Cost
                        </label>
                      </div>
                    </div>
                  </>

                  {/* Deliveries Section */}
                  <>
                    <div className={isDelivery ? "block" : "hidden"}>
                      {/* Location */}
                      <div className="relative w-full max-w-xs mt-7">
                        <input
                          type="text"
                          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                          placeholder=" "
                          defaultValue={`${
                            shipment?.deliveries?.[0].arrivalWaypoint?.location
                              ?.latLng?.latitude ?? ""
                          }${
                            shipment?.deliveries?.[0]?.arrivalWaypoint
                              ?.location != null
                              ? `, ${
                                  shipment?.deliveries?.[0]?.arrivalWaypoint
                                    ?.location?.latLng?.longitude ?? ""
                                }`
                              : ""
                          }`}
                          required
                          ref={delivLoc}
                        />
                        <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                          Location
                        </label>
                      </div>

                      {/* Time*/}
                      <h3 className="text-gray-700 mt-4">Time Window</h3>
                      <DateTimeInput
                        setTimee={setDeliveryTimeStr}
                        currentTime={
                          Number(
                            shipment?.deliveries?.[0]?.timeWindows?.[0]
                              ?.startTime
                          ) ?? null
                        }
                      />
                      <h3>to</h3>
                      <DateTimeInput
                        setTimee={setDeliveryTimeEnd}
                        currentTime={
                          Number(
                            shipment?.deliveries?.[0]?.timeWindows?.[0]?.endTime
                          ) ?? null
                        }
                      />

                      {/* Duration */}
                      <h3 className="text-gray-700">
                        <strong>Select Duration</strong>
                      </h3>
                      <input
                        ref={delivDuration}
                        type="time"
                        id="time"
                        name="time"
                        defaultValue={convertSecondsToTime(
                          shipment?.deliveries?.[0]?.duration?.seconds ?? null
                        )}
                        className="mt-1 ml-2 block w-2/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />

                      {/* cost  */}
                      <div className="relative w-1/3 max-w-xs mt-7">
                        <input
                          ref={delivCost}
                          defaultValue={shipment?.deliveries?.[0]?.cost ?? ""}
                          type="number"
                          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                          placeholder=" "
                          required
                        />
                        <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                          Cost
                        </label>
                      </div>
                    </div>
                  </>
                </div>

                {/* map */}
                <div className="flex-1 h-auto grid grid-rows-6">
                  <div className="row-span-5">
                    <App />
                    {/* <AutoCompleteMap/> */}
                  </div>

                  <div className="flex h-[80%]  mt-4 justify-end pt-4">
                    <button
                      className="p-3 px-6 py-2 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                      onClick={handleSubmitButton}
                    >
                      {id ? "Save" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShipmentAddFormCall;
