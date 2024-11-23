import React from "react";

const  BasicInfo = (props) => {
  //Refs
  const {
    currentVehicle,
    labelRef,
    loadLimitRef,
    fixedCostRef,
    costPerHourRef,
  } = props;

  return (
    <>
      {/* Label of Vehicle */}
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          defaultValue={currentVehicle?.label ?? ""}
          className="peer w-full px-2 py-2 border-b-[2px] h-10 border-gray-300 mx-2 outline-none focus:border-blue-500"
          placeholder=" "
          ref={labelRef}
          required
        />
        <label
          className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600"
        >
          Label
        </label>
      </div>

      {/* Load Limit weight */}
      <div className="relative w-full max-w-xs mt-7">
        <input
          type="number"
          className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
          placeholder=" "
          defaultValue={currentVehicle?.loadLimits?.weight?.maxLoad ?? ""}
          ref={loadLimitRef}
          required
        />
        <label
          className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600"
        >
          Load Limit Weight
        </label>
      </div>

      <div className="flex flex-wrap justify-start">
        {/* Fixed Cost  */}
        <div className="relative w-1/3 max-w-xs mt-7 mr-2">
          <input
            ref={fixedCostRef}
            defaultValue={currentVehicle?.fixedCost ?? ""}
            type="number"
            className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600"
          >
            Fixed Cost
          </label>
        </div>

        {/* Cost per Hour */}
        <div className="relative w-1/3 max-w-xs mt-7">
          <input
            ref={costPerHourRef}
            defaultValue={currentVehicle?.costPerHour ?? ""}
            type="number"
            className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600"
          >
            Cost / Hour
          </label>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
