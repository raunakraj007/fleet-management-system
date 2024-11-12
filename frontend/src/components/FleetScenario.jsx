import React, { useRef, useState } from "react";
import DateTimeInput from "./DateTime";
import { useDispatch, useSelector } from "react-redux";
import { addScenario } from "../redux/scenarioSlice";

import { useNavigate } from "react-router-dom";

const FleetScenario = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const v = useSelector((state) => state.vehiclesSlice.vehicles);
  const [globalStrTime, setGlobalStrTime] = useState(null);
  const [globalEndTime, setGlobalEndTime] = useState(null);
  const [maxActiveVehicle, setMaxActiveVehicle] = useState(null);
  const [considerRoadTraffic, setConsiderRoadTraffic] = useState(false);
  const [label, setLabel] = useState("");
  const [searchMode, setSearchMode] = useState(1);
  const [maxTime, setMaxTime] = useState(8);

  const labl = useRef();
  const maxTimeRef = useRef();
  const maxActiveVehicleRef = useRef();

  const handleSubmitButton = (e) => {
    e.preventDefault();

    if (maxActiveVehicle > v.length) {
      alert(
        "Max Active Vehicle should be less than or equal to total number of vehicles"
      );
      return;
    }
    console.log("Fleet Scenario");
    console.log(
      label,
      globalStrTime,
      globalEndTime,
      maxTime,
      maxActiveVehicle,
      considerRoadTraffic,
      searchMode
    );

    dispatch(
      addScenario({
        label,
        globalStrTime,
        globalEndTime,
        maxTime,
        maxActiveVehicle,
        considerRoadTraffic,
        searchMode,
      })
    );

   navigator("/route-optimization");
  };

  return (
    <div className="bg-white w-[60%] h-[90vh] pt-7">
      <h1 className="text-center text-gray-600">
        <strong>Manage Fleet</strong>
      </h1>
      <form action="" className="relative">
        <div className="relative w-full ml-5 max-w-xs mt-7">
          <input
            type="text"
            className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
            placeholder=" "
            required
            // ref={labl}
            onChange={(e) => setLabel(e.target.value)}
          />
          <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
            <strong>Fleet Name/ID</strong>
          </label>
        </div>

        <div className="ml-7 w-[80%] mt-5">
          <h3 className="text-gray-500">
            <strong>Fleet Starting Time</strong>
          </h3>
          <DateTimeInput setTimee={setGlobalStrTime} />
          <h3 className="text-gray-500">
            <strong>Fleet Ending Time</strong>
          </h3>
          <DateTimeInput setTimee={setGlobalEndTime} />
        </div>

        <div className="flex items-center mt-5 ml-7">
          <span className="mr-2 text-gray-500">
            <strong>
              Consider Road Trafic: {considerRoadTraffic ? "On" : "Off"}
            </strong>
          </span>
          <div
            className={`relative inline-flex h-5 w-10 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
              considerRoadTraffic ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setConsiderRoadTraffic(!considerRoadTraffic)}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                considerRoadTraffic ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        <div className="relative w-full ml-5 max-w-xs mt-7">
          <input
            type="number"
            className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
            placeholder=" "
            required
            // ref={maxTimeRef}
            onChange={(e) => setMaxTime(e.target.value)}
          />
          <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
            <strong>Maximum Search Timem (in seconds)</strong>
          </label>
        </div>

        <div className="text-gray-500 ml-8 mt-4">
          <label>
            <strong>Search Mode</strong>
          </label>
          <select
            className="ml-2"
            value={searchMode}
            onChange={(e) => setSearchMode(e.target.value)}
          >
            <option value={1} className="text-black">
              Return first good solution
            </option>
            <option value={2}>Search for better solution upto timeLimit</option>
          </select>
        </div>

        <div className="relative w-full ml-5 max-w-xs mt-7">
          <input
            type="number"
            className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
            placeholder=" "
            required
            // ref={maxActiveVehicleRef}
            onChange={(e) => setMaxActiveVehicle(e.target.value)}
          />
          <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
            <strong>Max Active Vehicle</strong>
          </label>
        </div>

        <button
          type="submit"
          className="px-6 py-3 font-medium absolute right-10 tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
          onClick={handleSubmitButton}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default FleetScenario;

// const FloatingLabelInput = ({
//   label,
//   value,
//   onChange,
//   type = "text",
//   min,
//   max,
//   required = true,
// }) => (
//   <div className="relative w-full max-w-xs mt-7">
//     <input
//       type={type}
//       className="peer w-full px-2 py-2 border-b-[2px] h-10 border-gray-300 mx-2 outline-none focus:border-blue-500"
//       placeholder=" "
//       required={required}
//       value={value}
//       onChange={onChange}
//       min={min}
//       max={max}
//     />
//     <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
//       <strong>{label}</strong>
//     </label>
//   </div>
// );

// const ToggleSwitch = ({ label, value, onChange }) => (
//   <div className="flex items-center mt-5">
//     <span className="mr-2 text-gray-500">
//       <strong>
//         {label}: {value ? "On" : "Off"}
//       </strong>
//     </span>
//     <div
//       className={`relative inline-flex h-5 w-10 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
//         value ? "bg-blue-500" : "bg-gray-300"
//       }`}
//       onClick={() => onChange(!value)}
//     >
//       <span
//         className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
//           value ? "translate-x-5" : "translate-x-0"
//         }`}
//       />
//     </div>
//   </div>
// );

// const FleetScenario = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const vehicles = useSelector((state) => state.vehiclesSlice.vehicles);

//   const [formData, setFormData] = useState({
//     label: "",
//     globalStrTime: null,
//     globalEndTime: null,
//     maxTime: 8,
//     maxActiveVehicle: "",
//     considerRoadTraffic: false,
//     searchMode: "1",
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.label.trim()) {
//       newErrors.label = "Fleet Name/ID is required";
//     }

//     if (!formData.globalStrTime) {
//       newErrors.globalStrTime = "Start time is required";
//     }

//     if (!formData.globalEndTime) {
//       newErrors.globalEndTime = "End time is required";
//     }

//     if (
//       formData.globalStrTime &&
//       formData.globalEndTime &&
//       new Date(formData.globalStrTime) >= new Date(formData.globalEndTime)
//     ) {
//       newErrors.globalEndTime = "End time must be after start time";
//     }

//     if (!formData.maxActiveVehicle) {
//       newErrors.maxActiveVehicle = "Max active vehicles is required";
//     } else if (parseInt(formData.maxActiveVehicle) > vehicles.length) {
//       newErrors.maxActiveVehicle = `Max active vehicles cannot exceed total vehicles (${vehicles.length})`;
//     }

//     if (formData.maxTime <= 0) {
//       newErrors.maxTime = "Search time must be greater than 0";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     dispatch(addScenario(formData));
//     navigate("/route-optimization");
//   };

//   const handleInputChange = (field) => (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div className="bg-white w-full max-w-4xl mx-auto p-8 rounded-lg shadow-sm">
//       <h1 className="text-2xl font-bold text-gray-700 text-center mb-8">
//         Manage Fleet
//       </h1>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <FloatingLabelInput
//           label="Fleet Name/ID"
//           value={formData.label}
//           onChange={handleInputChange("label")}
//         />
//         {errors.label && (
//           <p className="text-red-500 text-sm ml-2">{errors.label}</p>
//         )}

//         <div className="space-y-4 mt-6">
//           <h3 className="text-gray-700 font-semibold">Fleet Schedule</h3>
//           <div className="ml-4">
//             <DateTimeInput
//               label="Start Time"
//               value={formData.globalStrTime}
//               onChange={(value) =>
//                 setFormData((prev) => ({ ...prev, globalStrTime: value }))
//               }
//             />
//             {errors.globalStrTime && (
//               <p className="text-red-500 text-sm">{errors.globalStrTime}</p>
//             )}

//             <DateTimeInput
//               label="End Time"
//               value={formData.globalEndTime}
//               onChange={(value) =>
//                 setFormData((prev) => ({ ...prev, globalEndTime: value }))
//               }
//             />
//             {errors.globalEndTime && (
//               <p className="text-red-500 text-sm">{errors.globalEndTime}</p>
//             )}
//           </div>
//         </div>

//         <ToggleSwitch
//           label="Consider Road Traffic"
//           value={formData.considerRoadTraffic}
//           onChange={(value) =>
//             setFormData((prev) => ({ ...prev, considerRoadTraffic: value }))
//           }
//         />

//         <FloatingLabelInput
//           label="Maximum Search Time (in seconds)"
//           type="number"
//           value={formData.maxTime}
//           onChange={handleInputChange("maxTime")}
//           min={1}
//         />
//         {errors.maxTime && (
//           <p className="text-red-500 text-sm ml-2">{errors.maxTime}</p>
//         )}

//         <div className="space-y-2">
//           <label className="block text-gray-700 font-semibold">
//             Search Mode
//           </label>
//           <select
//             className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//             value={formData.searchMode}
//             onChange={handleInputChange("searchMode")}
//           >
//             <option value="1">Return first good solution</option>
//             <option value="2">
//               Search for better solution up to timeLimit
//             </option>
//           </select>
//         </div>

//         <FloatingLabelInput
//           label="Max Active Vehicles"
//           type="number"
//           value={formData.maxActiveVehicle}
//           onChange={handleInputChange("maxActiveVehicle")}
//           min={1}
//           max={vehicles.length}
//         />
//         {errors.maxActiveVehicle && (
//           <p className="text-red-500 text-sm ml-2">{errors.maxActiveVehicle}</p>
//         )}

//         <div className="flex justify-end mt-8">
//           <button
//             type="submit"
//             className="px-6 py-3 font-medium tracking-wide text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//           >
//             Save Fleet Scenario
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FleetScenario;
