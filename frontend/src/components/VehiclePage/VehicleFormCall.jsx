import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filesAdd from "../../assets/fileAdd.svg";
import DateTimeInput from "../DateTime";
import App from "../Maps/autoComplete/src/app";
import ADD_TRUCK_ICON from "../../assets/addTruck.svg";
import ADD_ICON from "../../assets/add-to-queue-svgrepo-com.svg";
import { addVehicles, editVehicleByID } from "../../redux/vehiclesSlice";

const VehicleFormCall = ({ id, closeBox }) => {
  let currentVehicle = null;
  if (id) {
    currentVehicle = useSelector((state) =>
      state.vehiclesSlice.vehicles.find((vehicle) => vehicle.id === id)
    );
  }

  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [avoidTolls, setAvoidTolls] = useState(
    currentVehicle?.routeModifiers?.avoidTolls ?? false
  );
  const [avoidHighways, setAvoidHighways] = useState(
    currentVehicle?.routeModifiers?.avoidHighways ?? false
  );
  const labl = useRef(null);
  const loadLimit = useRef(null);
  const fixedCost = useRef(null);
  const costPerHour = useRef(null);
  const startingLocation = useRef(null);
  const endingLocation = useRef(null);
  const [startingTimeWindowStarts, setStartingTimeWindowStarts] =
    useState(null);
  const [startingTimeWindowEnds, setStartingTimeWindowEnds] = useState(null);
  const [endingTimeWindowStarts, setEndingTimeWindowStarts] = useState(null);
  const [endingTimeWindowEnds, setEndingTimeWindowEnds] = useState(null);

  const closeModal = () => {
    setOpen(false);
    if (closeBox) {
      closeBox(false);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleSubmitButton = () => {
    console.log("submit button clicked");
    const startingLocationValue = startingLocation?.current?.value;
    const endingLocationValue = endingLocation?.current?.value;
    const loadLimitValue = loadLimit?.current?.value;
    const costPerHourValue = costPerHour?.current?.value;
    const fixedCostValue = fixedCost?.current?.value;
    console.log("Starting Location Value:", startingLocationValue);
    console.log("Ending Location Value:", endingLocationValue);
    console.log("Load Limit Value:", loadLimitValue);
    console.log("Cost Per Hour Value:", costPerHourValue);
    console.log("Fixed Cost Value:", fixedCostValue);
    if (
      !startingLocationValue ||
      !endingLocationValue ||
      !loadLimitValue ||
      !costPerHourValue ||
      !fixedCostValue
    ) {
      console.log("One of the required values is missing");
      // return;
    }
    const vehicle = {};
    if (id) {
      vehicle.id = id;
    }

    if (labl.current.value) {
      vehicle.label = labl.current.value;
    }
    if (avoidTolls == true || avoidHighways == true) {
      vehicle.routeModifiers = {};
      vehicle.routeModifiers.avoidTolls = avoidTolls;
      vehicle.routeModifiers.avoidHighways = avoidHighways;
    }

    if (startingLocationValue) {
      const strLat = Number(startingLocationValue.split(",")[0]);
      const strLng = Number(startingLocationValue.split(",")[1]);
      vehicle.startWaypoint = {
        location: { latLng: { latitude: strLat, longitude: strLng } },
      };
    }
    if (endingLocationValue) {
      const endLat = Number(endingLocationValue.split(",")[0]);
      const endLng = Number(endingLocationValue.split(",")[1]);
      vehicle.endWaypoint = {
        location: { latLng: { latitude: endLat, longitude: endLng } },
      };
    }
    if (startingTimeWindowStarts || startingTimeWindowEnds) {
      if (
        startingTimeWindowStarts !== "946665000" &&
        startingTimeWindowEnds !== "946665000"
      ) {
        vehicle.startTimeWindows = [
          {
            startTime: { seconds: startingTimeWindowStarts },
            endTime: { seconds: startingTimeWindowEnds },
          },
        ];
      }
    }
    if (endingTimeWindowStarts || endingTimeWindowEnds) {
      if (
        endingTimeWindowStarts !== "946665000" &&
        endingTimeWindowEnds !== "946665000"
      ) {
        vehicle.endTimeWindows = [
          {
            startTime: { seconds: endingTimeWindowStarts },
            endTime: { seconds: endingTimeWindowEnds },
          },
        ];
      }
    }
    if (loadLimitValue) {
      vehicle.loadLimits = {};
      vehicle.loadLimits.weight = { maxLoad: loadLimitValue.toString() };
    }
    if (costPerHourValue) {
      vehicle.costPerHour = Number(costPerHourValue);
    }
    if (fixedCostValue) {
      vehicle.fixedCost = Number(fixedCostValue);
    }
    vehicle.ignore = false;

    console.log(vehicle);

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

    const cleanV = removeNullValues(vehicle);
    console.log(cleanV);
    if (id) {
      dispatch(editVehicleByID({ id: id, data: cleanV }));
    } else {
      dispatch(addVehicles([cleanV]));
    }
    closeModal();
  };

  return (
    <>
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
            onClick={closeModal}
          />

          {open && (
            <div className="z-50 px-5 py-2 h-[90vh] mx-auto  overflow-y-auto bg-white rounded shadow-lg relative">
              <div className="h-[75vh] w-[800px] ">
                <p className="text-2xl font-bold"></p>
                <h3 className="text-gray-700 text-2xl font-bold">
                  <strong>
                    {id
                      ? `Edit Vehicle: ${currentVehicle?.label}`
                      : "Add Vehicles"}
                  </strong>
                </h3>

                <div className="flex">
                  {/* form details */}
                  <div className="mt-2 pt-6 w-[60%] max-h-[75vh] overflow-y-auto scrollbar-hide">
                    {/* Label of Vehicle */}
                    <div className="relative w-full max-w-xs">
                      <input
                        type="text"
                        defaultValue={currentVehicle?.label ?? ""}
                        className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                        placeholder=" "
                        required
                        ref={labl}
                      />
                      <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                        Label
                      </label>
                    </div>

                    {/* Load Limit weight */}
                    <div className="relative w-full max-w-xs mt-7">
                      <input
                        type="number"
                        className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                        placeholder=" "
                        required
                        defaultValue={
                          currentVehicle?.loadLimits?.weight?.maxLoad ?? ""
                        }
                        ref={loadLimit}
                      />
                      <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                        Load Limit Weight
                      </label>
                    </div>

                    <div className="flex flex-wrap justify-start">
                      {/* Fixed Cost  */}
                      <div className="relative w-1/3 max-w-xs mt-7 mr-2">
                        <input
                          ref={fixedCost}
                          defaultValue={currentVehicle?.fixedCost ?? ""}
                          type="number"
                          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                          placeholder=" "
                          required
                        />
                        <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                          Fixed Cost
                        </label>
                      </div>

                      {/* Cost per Hour */}
                      <div className="relative w-1/3 max-w-xs mt-7">
                        <input
                          ref={costPerHour}
                          defaultValue={currentVehicle?.costPerHour ?? ""}
                          type="number"
                          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                          placeholder=" "
                          required
                        />
                        <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                          Cost / Hour
                        </label>
                      </div>
                    </div>

                    {/* Avoid Tools */}
                    <div className="flex items-center mt-4">
                      <span className="mr-2 text-gray-500">Avoid Tools:</span>
                      <div
                        className={`relative inline-flex h-5 w-10 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
                          avoidTolls ? "bg-blue-600" : "bg-gray-300"
                        }`}
                        onClick={() => setAvoidTolls(!avoidTolls)}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                            avoidTolls ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Avoid Highways */}
                    <div className="flex items-center mt-4">
                      <span className="mr-2 text-gray-500">
                        Avoid Highways:
                      </span>
                      <div
                        className={`relative inline-flex h-5 w-10 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
                          avoidHighways ? "bg-blue-600" : "bg-gray-300"
                        }`}
                        onClick={() => setAvoidHighways(!avoidHighways)}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                            avoidHighways ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="mt-7">
                      {/* Starting Location */}
                      <div className="relative w-full max-w-xs">
                        <input
                          defaultValue={`${
                            currentVehicle?.startWaypoint?.location?.latLng
                              ?.latitude ?? ""
                          }${
                            currentVehicle?.startWaypoint?.location?.latLng
                              ?.longitude != null
                              ? `,${currentVehicle?.startWaypoint?.location?.latLng?.longitude}`
                              : ""
                          }`}
                          type="text"
                          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                          placeholder=" "
                          required
                          ref={startingLocation}
                        />
                        <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                          Stating Location
                        </label>
                      </div>
                      {/* Ending Location */}
                      <div className="relative w-full max-w-xs mt-7">
                        <input
                          defaultValue={`${
                            currentVehicle?.endWaypoint?.location?.latLng
                              ?.latitude ?? ""
                          }${
                            currentVehicle?.endWaypoint?.location?.latLng
                              ?.longitude != null
                              ? `,${currentVehicle?.endWaypoint?.location?.latLng?.longitude}`
                              : ""
                          }`}
                          ref={endingLocation}
                          type="text"
                          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                          required
                        />
                        <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
                          Ending Location
                        </label>
                      </div>

                      <div className="mt-8 text-gray-700 ">
                        <h2>
                          <strong>Optional</strong>
                        </h2>

                        <h3 className="text-gray-700 mt-4">
                          Starting Time Window
                        </h3>
                        <DateTimeInput
                          setTimee={setStartingTimeWindowStarts}
                          currentTime={
                            currentVehicle?.startTimeWindows?.[0]?.startTime
                              ?.seconds ?? null
                          }
                        />
                        <h3>to</h3>
                        <DateTimeInput
                          setTimee={setStartingTimeWindowEnds}
                          currentTime={
                            currentVehicle?.startTimeWindows?.[0]?.endTime
                              ?.seconds ?? null
                          }
                        />
                        <h3 className="text-gray-700 mt-4">
                          Ending Time Window
                        </h3>
                        <DateTimeInput
                          setTimee={setEndingTimeWindowStarts}
                          currentTime={
                            currentVehicle?.endTimeWindows?.[0]?.startTime
                              ?.seconds ?? null
                          }
                        />
                        <h3>to</h3>
                        <DateTimeInput
                          setTimee={setEndingTimeWindowEnds}
                          currentTime={
                            currentVehicle?.endTimeWindows?.[0]?.endTime
                              ?.seconds ?? null
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {/* map */}
                  <div className="w-[40%] h-auto grid grid-rows-6">
                    <div className="row-span-5 bg-black">
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
                        {id ? "Edit" : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default VehicleFormCall;
