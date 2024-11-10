import React, { useRef, useState } from "react";
import truck from "../assets/truck-svgrepo-com.svg";
import filesAdd from "../assets/fileAdd.svg";
import DeliveryPickupSelector from "./PickupDileverySelector";
import DateTimeInput from "./DateTime";
import App from "./Maps/autoComplete/src/app";
import { addVehicles } from "../redux/vehiclesSlice";
import { useDispatch } from "react-redux";

const NewCad = () => {
  return (
    <div className="w-[30%] py-4">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        {" "}
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>{" "}
        <div className="relative z-10 mx-auto max-w-md">
          {" "}
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            {" "}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white transition-all"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />{" "}
            </svg>{" "} */}
            <img src={truck} alt="" className="h-14" />
          </span>{" "}
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            {" "}
            <p>
              Perfect for learning how the framework works, prototyping a new
              idea, or creating a demo to share online.
            </p>{" "}
          </div>{" "}
          <div className="pt-5 text-base font-semibold leading-7">
            {" "}
            <p>
              {" "}
              <a
                href="#"
                className="text-sky-500 transition-all duration-300 group-hover:text-white"
              >
                {" "}
                Read the docs &rarr;{" "}
              </a>{" "}
              <a
                href="#"
                className="text-sky-500 transition-all duration-300 group-hover:text-white"
              >
                {" "}
                Read the docs &rarr;{" "}
              </a>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

const AddVehicles = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [avoidTolls, setAvoidTolls] = useState(false);
  const [avoidHighways, setAvoidHighways] = useState(false);
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
    if (labl.current.value) {
      vehicle.displayName = labl.current.value;
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
      vehicle.loadLimits.weight = { amount: loadLimitValue.toString() };
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
      const cleanedObject = Object.entries(obj).reduce((acc, [key, value]) => {
        if (
          value !== null &&
          value !== undefined &&
          value !== "" &&
          value !== 0 &&
          value !== false &&
          value !== "false" &&
          value !== "0" &&
          value !== "null" &&
          value !== "undefined" 
          
        ) {
          acc[key] = isObject(value) ? removeNullValues(value) : value;
        }
        return acc;
      }, {});
      return cleanedObject;
    };

    const cleanV = removeNullValues(vehicle);
    console.log(cleanV);
    dispatch(addVehicles([cleanV]));
  };

  return (
    <>
      {/* Modal activator */}
      <div className="w-[30%] py-4" onClick={openModal}>
        <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          {" "}
          <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>{" "}
          <div className="relative z-10 mx-auto max-w-md">
            {" "}
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
              <img src={filesAdd} alt="" className="h-14" />
            </span>{" "}
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
              {" "}
              <p>Add Json format file</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Modal Content */}
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
              <div className="mt-2 pt-6 w-[60%] max-h-[75vh] overflow-y-auto scrollbar-hide">
                {/* Label of Vehicle */}
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

                {/* Load Limit weight */}
                <div className="relative w-full max-w-xs mt-7">
                  <input
                    type="text"
                    className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
                    placeholder=" "
                    required
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
                  <span className="mr-2 text-gray-500">
                    Avoid Tools: {avoidTolls ? "On" : "Off"}
                  </span>
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
                    Avoid Highways: {avoidHighways ? "On" : "Off"}
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

                    <h3 className="text-gray-700 mt-4">Starting Time Window</h3>
                    <DateTimeInput setTimee={setStartingTimeWindowStarts} />
                    <h3>to</h3>
                    <DateTimeInput setTimee={setStartingTimeWindowEnds} />
                    <h3 className="text-gray-700 mt-4">Ending Time Window</h3>
                    <DateTimeInput setTimee={setEndingTimeWindowStarts} />
                    <h3>to</h3>
                    <DateTimeInput setTimee={setEndingTimeWindowEnds} />
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
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddVehiclesByFile = () => {
  const dispatch = useDispatch();
  // const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          console.log(json);
          // setJsonData(json);
          dispatch(addVehicles(json));
          setError("");
        } catch (error) {
          setError("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };
  const handleDivClick = () => {
    document.getElementById("file-upload").click();
  };
  return (
    <div className="w-[30%] py-4">
      <div
        onClick={handleDivClick}
        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
      >
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>

        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <img src={filesAdd} alt="" className="h-14" />
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>Add Json format file</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
      <input
        id="file-upload"
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

function VehiclesList() {
  return (
    <div className="mt-8">
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 flex flex-wrap justify-between">
          <NewCad />

          <AddVehicles />
          <AddVehiclesByFile />
          <AddVehicles />
        </div>
      </div>
    </div>
  );
}

export default VehiclesList;
