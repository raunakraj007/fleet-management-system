import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VehicleAccordion from "./VehicleAccordion";
import { addRouteIndex } from "../../redux/mapSlice";

const UsedVehicle = () => {
  const dispatch = useDispatch();
  const routes = useSelector(
    (state) => state.optimizeRouteRes?.optimizeRouteRes?.routes
  );
  const [open, setOpen] = useState(0);
  dispatch(addRouteIndex(open));

  return (
    <>
      <div className="bg-white w-[95%] px-1 mx-auto rounded-xl h-auto py-3  ">
        {routes?.map((route, index) => (
          <VehicleAccordion
            key={index}
            route={route}
            id={index}
            open={open === index ? true : false}
            setOpen={setOpen}
          />
        ))}
      </div>
    </>
  );
};

export default UsedVehicle;
