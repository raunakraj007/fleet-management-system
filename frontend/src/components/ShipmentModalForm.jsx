import React, { useRef, useState } from "react";
import DeliveryPickupSelector from "./PickupDileverySelector";
import DateTimeInput from "./DateTime";
import App from "../components/Maps/autoComplete/src/app";
import addIcon from "../assets/add.svg";
import { addShipments } from "../redux/shipmentSlice";
import { useDispatch } from "react-redux";

const ShipmentModalForm = () => {
  const dispatch = useDispatch();
  const [isPickUp, setIsPickUp] = useState(true);
  const [isDelivery, setIsDelivery] = useState(false);
  const [open, setOpen] = useState(false);
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

  const handleSubmitButton = () => {
    console.log("submit button clicked");

    function timeStringToSeconds(timeString) {
      const [hours, minutes] = timeString.split(":").map(Number);
      return hours * 3600 + minutes * 60;
    }

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

    if (name) {
      Shipment.displayName = name.toString();
      console.log("Shipment.displayName:", Shipment.displayName);
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
            startTime:
              pickupTimeStr == "946665000" ? null : pickupTimeStr.toString(),
            endTime:
              pickupTimeEnd == "946665000" ? null : pickupTimeEnd.toString(),
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
            startTime:
              deliveryTimeStr == "946665000"
                ? null
                : deliveryTimeStr.toString(),
            endTime:
              deliveryTimeEnd == "946665000"
                ? null
                : deliveryTimeEnd.toString(),
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

    dispatch(addShipments([cleanedShipment]));
  };

  return (
    <div>
      <img
        src={addIcon}
        alt=""
        className="w-14 hover:scale-110 transition-transform duration-200"
        onClick={openModal}
      />

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
              <strong>Add Shipment</strong>
            </h3>

            <div className="flex">
              {/* form details */}
              <div className=" mt-2 w-[60%] pt-6 max-h-[74vh] overflow-y-auto scrollbar-hide ">
                {/* DisplayName */}
                <div className="relative w-full max-w-xs">
                  <input
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
                        ref={picUpLoc}
                      />
                      <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                        Location
                      </label>
                    </div>

                    {/* Time*/}
                    <h3 className="text-gray-700 mt-4">Time Window</h3>
                    <DateTimeInput setTimee={setPickupTimeStr} />
                    <h3>to</h3>
                    <DateTimeInput setTimee={setPickupTimeEnd} />

                    {/* Duration */}
                    <h3 className="text-gray-700">
                      <strong>Select Duration</strong>
                    </h3>
                    <input
                      type="time"
                      id="time"
                      ref={picUpDuration}
                      name="time"
                      defaultValue="00:00"
                      className="mt-1 ml-2 block w-2/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />

                    {/* cost  */}
                    <div className="relative w-1/3 max-w-xs mt-7">
                      <input
                        type="number"
                        className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                        placeholder=" "
                        required
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
                        required
                        ref={delivLoc}
                      />
                      <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                        Location
                      </label>
                    </div>

                    {/* Time*/}
                    <h3 className="text-gray-700 mt-4">Time Window</h3>
                    <DateTimeInput setTimee={setDeliveryTimeStr} />
                    <h3>to</h3>
                    <DateTimeInput setTimee={setDeliveryTimeEnd} />

                    {/* Duration */}
                    <h3 className="text-gray-700">
                      <strong>Select Duration</strong>
                    </h3>
                    <input
                      ref={delivDuration}
                      type="time"
                      id="time"
                      name="time"
                      defaultValue="00:00"
                      className="mt-1 ml-2 block w-2/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />

                    {/* cost  */}
                    <div className="relative w-1/3 max-w-xs mt-7">
                      <input
                        ref={delivCost}
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
              <div className="w-[40%] h-auto grid grid-rows-6">
                <div className="row-span-5">
                  <App />
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
                    onClick={handleSubmitButton}
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

export default ShipmentModalForm;
