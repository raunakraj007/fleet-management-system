import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOptimizeRouteRes } from "../../redux/optimizeRouteRes";
import axios from "axios";

const BACKEND_URL_ROUTE_OPTIMIZER =
  "http://localhost:8000/api/optimization/fleet-routing/optimize-tours";
const BACKEND_URL_ROUTE_OPTIMIZER2 = "http://localhost:3000/data";

const GetResponseButton = () => {
  const dispatch = useDispatch();

  const shipments = useSelector((state) =>
    state.shipmentSlice.shipments.map(({ id, ...data }) => data)
  );
  const vehicles = useSelector((state) =>
    state.vehiclesSlice.vehicles.map(({ id, ...data }) => data)
  );
  const scenarios = useSelector((state) => state.scenarioSlice.scenarios);

  const handleAPICall = () => {
    console.log("API Call");

    console.log(BACKEND_URL_ROUTE_OPTIMIZER);
    // console.log(typeof scenarios[0].timeout);

    const payLoad = {
      timeout: {
        seconds: parseInt(scenarios.maxTime),
      },
      model: {
        shipments: shipments,
        vehicles: vehicles,
        globalStartTime: { seconds: scenarios.globalStrTime },
        globalEndTime: { seconds: scenarios.globalEndTime },
        maxActiveVehicles: scenarios?.maxActiveVehicle ?? null,
      },
      searchMode: parseInt(scenarios.searchMode),
      considerRoadTraffic: scenarios.considerRoadTraffic,
      populatePolylines: true,
      label: scenarios?.label ?? "no label",
    };

    console.log(payLoad);

    axios
      .post(BACKEND_URL_ROUTE_OPTIMIZER, payLoad)
      .then((response) => {
        console.log(response);
        dispatch(addOptimizeRouteRes(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAPICall2 = () => {
    console.log("API Call 2");
    axios
      .get(BACKEND_URL_ROUTE_OPTIMIZER2)
      .then((response) => {
        console.log(response);
        dispatch(addOptimizeRouteRes(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        className=" w-full mt-1 bg-slate-400 active:bg-blue-400"
        // onClick={handleAPICall}
        onClick={handleAPICall2}
      >
        Get Response
      </button>
    </>
  );
};

export default GetResponseButton;
