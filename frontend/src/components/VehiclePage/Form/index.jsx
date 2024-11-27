import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAutoCompleteId } from "../../../redux/mapSlice";
import BasicInfo from "./BasicInfo";
import RouteModifiers from "./RouteModifiers";
import Location from "./Location";
import TimeWindows from "./TimeWindows";
import Map from "./Map";
// import { handleSubmitButton, useFormSubmit } from "./useFormSubmit";
import { removeNullValues } from "./utils";
import { editVehicleByID, addVehicles } from "../../../redux/vehiclesSlice";
import axios from "axios";

const index = ({ id, closeBox }) => {
  const dispatch = useDispatch();

  const currentVehicle = id
    ? useSelector((state) =>
        state.vehiclesSlice.vehicles.find((vehicle) => vehicle._id === id)
      )
    : null;

  const [open, setOpen] = useState(true);

  const [avoidTolls, setAvoidTolls] = useState(
    currentVehicle?.routeModifiers?.avoidTolls ?? false
  );
  const [avoidHighways, setAvoidHighways] = useState(
    currentVehicle?.routeModifiers?.avoidHighways ?? false
  );
  const [startingTimeWindowStarts, setStartingTimeWindowStarts] =
    useState(null);
  const [startingTimeWindowEnds, setStartingTimeWindowEnds] = useState(null);
  const [endingTimeWindowStarts, setEndingTimeWindowStarts] = useState(null);
  const [endingTimeWindowEnds, setEndingTimeWindowEnds] = useState(null);

  //Refs
  const labelRef = useRef(null);
  const loadLimitRef = useRef(null);
  const fixedCostRef = useRef(null);
  const costPerHourRef = useRef(null);
  const startingLocationRef = useRef(null);
  const endingLocationRef = useRef(null);

  //AutoComplete
  const [autoCompleteStartLocation, setAutoCompleteStartLocation] =
    useState(null);
  const [autoCompleteEndLocation, setAutoCompleteEndLocation] = useState(null);
  const [selectAutoComplete, setSelectAutoComplete] = useState(null);

  useEffect(() => {
    if (selectAutoComplete === 1) {
      dispatch(addAutoCompleteId(`vehicle-starting-location-${id ?? "new"}`));
    } else if (selectAutoComplete === 2) {
      dispatch(addAutoCompleteId(`vehicle-ending-location-${id ?? "new"}`));
    } else {
      dispatch(addAutoCompleteId(null));
    }
  }, [selectAutoComplete]);

  const closeModal = () => {
    setOpen(false);
    if (closeBox) {
      closeBox(false);
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const constructVehicleObject = () => {
    const vehicle = {};

    if (id) vehicle._id = id;
    console.log("id", id);

    // Basic Info
    if (labelRef.current.value) vehicle.label = labelRef.current.value;
    console.log("label", labelRef.current.value);

    // Load Limits
    if (loadLimitRef.current.value) {
      vehicle.loadLimits = {};
      vehicle.loadLimits.weight = {
        maxLoad: loadLimitRef.current.value.toString(),
      };
    }
    console.log("loadLimit", loadLimitRef.current.value);

    // Costs
    if (fixedCostRef.current.value) {
      vehicle.fixedCost = Number(fixedCostRef.current.value);
    }
    console.log("fixedCost", fixedCostRef.current.value);

    if (costPerHourRef.current.value) {
      vehicle.costPerHour = Number(costPerHourRef.current.value);
    }
    console.log("costPerHour", costPerHourRef.current.value);

    // Route Modifiers
    if (avoidTolls == true || avoidHighways == true) {
      vehicle.routeModifiers = {};
      vehicle.routeModifiers.avoidTolls = avoidTolls;
      vehicle.routeModifiers.avoidHighways = avoidHighways;
    }
    console.log("avoidTolls", avoidTolls);

    // Locations

    if (startingLocationRef.current.value) {
      const strLat = Number(startingLocationRef.current.value.split(",")[0]);
      const strLng = Number(startingLocationRef.current.value.split(",")[1]);
      vehicle.startWaypoint = {
        location: { latLng: { latitude: strLat, longitude: strLng } },
      };
    }
    console.log("startingLocation", startingLocationRef.current.value);

    if (endingLocationRef.current.value) {
      const endLat = Number(endingLocationRef.current.value.split(",")[0]);
      const endLng = Number(endingLocationRef.current.value.split(",")[1]);
      vehicle.endWaypoint = {
        location: { latLng: { latitude: endLat, longitude: endLng } },
      };
    }
    console.log("endingLocation", endingLocationRef.current.value);

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
    console.log("startingTimeWindowStarts", startingTimeWindowStarts);

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
    console.log("endingTimeWindowStarts", endingTimeWindowStarts);

    vehicle.ignore = false;

    return removeNullValues(vehicle);
  };

  const handleFormSubmit = () => {
    console.log("Form Submit ");
    const requiredFields = [
      labelRef.current?.value,
      loadLimitRef.current?.value,
      costPerHourRef.current?.value,
    ];

    if (requiredFields.some((field) => !field)) {
      console.log("One of the required values is missing");
      return;
    }

    console.log("All required fields are present");

    const vehicle = constructVehicleObject();
    console.log("vehicle", vehicle);

    if (id) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/vehicles/editVehicle`,
          vehicle
        )
        .then((res) => {
          console.log(res.data);
          dispatch(editVehicleByID(vehicle));
        })
        .catch((err) => {
          console.log(err);
        });

      console.log("Edit Vehicle", vehicle);
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/vehicles/addVehicle`,
          vehicle
        )
        .then((res) => {
          vehicle._id = res.data;
          dispatch(addVehicles([vehicle]));
        })
        .catch((err) => {
          console.log(err);
        });

      console.log("Add Vehicle");
    }

    // Close modal
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
                {/* Header */}
                <h3 className="text-gray-700 text-2xl font-bold">
                  <strong>
                    {id
                      ? `Edit Vehicle: ${currentVehicle?.label}`
                      : "Add Vehicles"}
                  </strong>
                </h3>

                <div className="flex mt-4">
                  {/* form */}
                  <div className="flex-1 mt-2 pt-6  max-h-[70vh] overflow-y-auto scrollbar-hide">
                    {/* Basic Info */}
                    <BasicInfo
                      currentVehicle={currentVehicle}
                      labelRef={labelRef}
                      loadLimitRef={loadLimitRef}
                      fixedCostRef={fixedCostRef}
                      costPerHourRef={costPerHourRef}
                    />

                    {/* Route Modifiers */}
                    <RouteModifiers
                      avoidTolls={avoidTolls}
                      avoidHighways={avoidHighways}
                      setAvoidTolls={setAvoidTolls}
                      setAvoidHighways={setAvoidHighways}
                    />

                    {/*location */}
                    <Location
                      currentVehicle={currentVehicle}
                      selectAutoComplete={selectAutoComplete}
                      autoCompleteStartLocation={autoCompleteStartLocation}
                      autoCompleteEndLocation={autoCompleteEndLocation}
                      setSelectAutoComplete={setSelectAutoComplete}
                      startingLocationRef={startingLocationRef}
                      endingLocationRef={endingLocationRef}
                    />

                    {/* Time Windows */}
                    <TimeWindows
                      currentVehicle={currentVehicle}
                      setStartingTimeWindowStarts={setStartingTimeWindowStarts}
                      setStartingTimeWindowEnds={setStartingTimeWindowEnds}
                      setEndingTimeWindowStarts={setEndingTimeWindowStarts}
                      setEndingTimeWindowEnds={setEndingTimeWindowEnds}
                    />
                  </div>

                  {/*Map*/}
                  <div className=" flex-1   h-[70vh]">
                    <Map
                      currentVehicle={currentVehicle}
                      setAutoCompleteStartLocation={
                        setAutoCompleteStartLocation
                      }
                      setAutoCompleteEndLocation={setAutoCompleteEndLocation}
                      selectAutoComplete={selectAutoComplete}
                    />
                  </div>
                </div>

                {/**Button */}
                <div className=" float-right ">
                  <button
                    className="p-3 px-6 py-2 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="p-3 px-6 py-2 mr-2 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                    onClick={handleFormSubmit}
                  >
                    {id ? "Edit" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default index;
