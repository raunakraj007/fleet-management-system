import React, { useRef, useState } from "react";
import DateTimeInput from "../DateTime";
import { useDispatch, useSelector } from "react-redux";
// import { addScenario } from "../redux/scenarioSlice";

import { useNavigate } from "react-router-dom";
import { addScenario } from "../../redux/scenarioSlice";
import { addOptimizeRouteRes } from "../../redux/optimizeRouteRes";
import axios from "axios";

const FleetScenario = ({ setIsPlan }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const currentScenario = useSelector((state) => state.scenarioSlice.scenarios);
  const Res = useSelector((state) => state?.optimizeRouteRes?.optimizeRouteRes);
  const numberOfVehicles = useSelector(
    (state) => state.vehiclesSlice.vehicles.length
  );
  const [globalStrTime, setGlobalStrTime] = useState(null);
  const [globalEndTime, setGlobalEndTime] = useState(null);
  const [maxActiveVehicle, setMaxActiveVehicle] = useState(null);
  const [considerRoadTraffic, setConsiderRoadTraffic] = useState(
    currentScenario?.considerRoadTraffic ?? false
  );
  const [label, setLabel] = useState("");
  const [searchMode, setSearchMode] = useState(
    currentScenario?.searchMode ?? 1
  );
  const [maxTime, setMaxTime] = useState(8);

  const labl = useRef();
  const maxTimeRef = useRef();
  const maxActiveVehicleRef = useRef();

  const handleSubmitButton = (e) => {
    e.preventDefault();

    if (maxActiveVehicle > numberOfVehicles) {
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
    const payload = {
      label,
      globalStartTime: globalStrTime,
      globalEndTime,
      maxTime,
      maxActiveVehicles: maxActiveVehicle,
      considerRoadTraffic,
      searchMode,
    };
    console.log(payload);
    setIsPlan(false);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/optimizeRoute`, payload)
      .then((res) => {
        console.log(res);

        dispatch(addOptimizeRouteRes(res.data));

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
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-white w-[full] h-[100vh] ">
      <div className="flex">
        <div className="w-1/2">
          <div className="relative w-full ml-5 max-w-xs mt-7">
            <input
              type="text"
              className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
              placeholder=" "
              required
              // ref={labl}
              defaultValue={currentScenario?.label ?? ""}
              onChange={(e) => setLabel(e.target.value)}
            />
            <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
              <strong>Fleet Name/ID</strong>
            </label>
          </div>
          <div className="relative w-full ml-5 max-w-xs mt-7">
            <input
              type="number"
              className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
              placeholder=" "
              required
              defaultValue={currentScenario?.maxActiveVehicle ?? null}
              // ref={maxActiveVehicleRef}
              onChange={(e) => setMaxActiveVehicle(e.target.value)}
            />
            <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
              <strong>Max Active Vehicle</strong>
            </label>
          </div>

          <div className="relative w-full ml-5 max-w-xs mt-7">
            <input
              type="number"
              className="peer w-full px-2 py-2 border-b-[2px]  h-10  border-gray-300  mx-2 outline-none focus:border-blue-500"
              placeholder=" "
              required
              defaultValue={currentScenario?.maxTime}
              // ref={maxTimeRef}
              onChange={(e) => setMaxTime(e.target.value)}
            />
            <label className="absolute left-2 top-2 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-6 peer-valid:text-sm peer-valid:text-blue-600">
              <strong>Maximum Search Time(s)</strong>
            </label>
          </div>
          <div className="flex items-center mt-5 ml-7">
            <span className="mr-2 text-gray-500">
              <strong>Consider Road Trafic:</strong>
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
              <option value={2}>
                Search for better solution upto timeLimit
              </option>
            </select>
          </div>
        </div>
        <div className="w-1/2">
          <div className="ml-7  mt-5">
            <h3 className="text-gray-500">
              <strong>Fleet Starting Time</strong>
            </h3>
            <DateTimeInput
              setTimee={setGlobalStrTime}
              currentTime={currentScenario?.globalStrTime ?? null}
            />
            <h3 className="text-gray-500">
              <strong>Fleet Ending Time</strong>
            </h3>
            <DateTimeInput
              setTimee={setGlobalEndTime}
              currentTime={currentScenario?.globalEndTime ?? null}
            />
          </div>
          <div className="flex space-x-8 w-2/5 ml-56">
            {Res && (
              <button
                type="submit"
                className="px-6 py-3 mt-10 font-medium   tracking-wide text-white bg-red-400 rounded-md hover:bg-red-600"
                onClick={() => setIsPlan(false)}
              >
                Cancle
              </button>
            )}

            <button
              type="submit"
              className="px-6 py-3  mt-10 font-medium   tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
              onClick={handleSubmitButton}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetScenario;
