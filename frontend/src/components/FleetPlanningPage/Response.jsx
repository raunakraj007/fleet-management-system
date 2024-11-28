import React from "react";
import { useSelector } from "react-redux";
import ResponseSimmer from "./ResponseSimmer";
import Data from "./Data";


const Response = ({setIsPlan}) => {
  const routes = useSelector(
    (state) => state.optimizeRouteRes?.optimizeRouteRes
  );
  console.log(routes);
  if (!routes) {
    return (
      <ResponseSimmer/>

    );
  }
  return (
    <Data setIsPlan={setIsPlan}/>
  );
};

export default Response;
