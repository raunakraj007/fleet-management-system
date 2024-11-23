import React from "react";
import AUTO_COMPLETE_ACTIVE from "../../../assets/auto-complete-active.png";
import AUTO_COMPLETE_INACTIVE from "../../../assets/auto-complete-iactive.png";

const Location = (props) => {
  const {
    currentVehicle,
    selectAutoComplete,
    autoCompleteStartLocation,
    autoCompleteEndLocation,
    setSelectAutoComplete,
    startingLocationRef,
    endingLocationRef,
  } = props;

  return (
    <>
      <div className="mt-7">
        {/* Starting Location */}
        <div className="relative flex  w-full max-w-xs">
          <input
            id={`vehicle-starting-location-${currentVehicle?.id ?? "new"}`}
            defaultValue={`${
              currentVehicle?.startWaypoint?.location?.latLng?.latitude ?? ""
            }${
              currentVehicle?.startWaypoint?.location?.latLng?.longitude != null
                ? `,${currentVehicle?.startWaypoint?.location?.latLng?.longitude}`
                : ""
            }`}
            type="text"
            className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
            placeholder=" "
            required
            ref={startingLocationRef}
          />

          <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
            Stating Location
          </label>

          <img
            src={
              selectAutoComplete === 1
                ? AUTO_COMPLETE_ACTIVE
                : AUTO_COMPLETE_INACTIVE
            }
            alt=""
            className="h-10 w-11 cursor-pointer"
            onClick={() => {
              if (selectAutoComplete === 1) {
                startingLocationRef.current.value = `${autoCompleteStartLocation.latitude},${autoCompleteStartLocation.longitude}`;
              }
              if (selectAutoComplete === 2) {
                endingLocationRef.current.value = `${autoCompleteEndLocation.latitude},${autoCompleteEndLocation.longitude}`;
              }

              startingLocationRef.current.focus();

              setSelectAutoComplete(selectAutoComplete === 1 ? null : 1);
            }}
          />
        </div>

        {/* Ending Location */}
        <div className="relative flex w-full max-w-xs mt-7">
          <input
            id={`vehicle-ending-location-${currentVehicle?.id ?? "new"}`}
            defaultValue={`${
              currentVehicle?.endWaypoint?.location?.latLng?.latitude ?? ""
            }${
              currentVehicle?.endWaypoint?.location?.latLng?.longitude != null
                ? `,${currentVehicle?.endWaypoint?.location?.latLng?.longitude}`
                : ""
            }`}
            ref={endingLocationRef}
            type="text"
            className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
            required
          />

          <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
            Ending Location
          </label>
          <img
            src={
              selectAutoComplete === 2
                ? AUTO_COMPLETE_ACTIVE
                : AUTO_COMPLETE_INACTIVE
            }
            alt=""
            className="h-10 w-11 cursor-pointer"
            onClick={() => {
              if (selectAutoComplete === 2) {
                endingLocationRef.current.value = `${autoCompleteEndLocation.latitude},${autoCompleteEndLocation.longitude}`;
              }
              if (selectAutoComplete === 1) {
                startingLocationRef.current.value = `${autoCompleteStartLocation.latitude},${autoCompleteStartLocation.longitude}`;
              }

              setSelectAutoComplete(selectAutoComplete === 2 ? null : 2);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Location;
