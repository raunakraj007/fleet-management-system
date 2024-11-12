import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import shipmentReducer from "./shipmentSlice";
import vehicleReducer from "./vehiclesSlice";
import scenarioReducer from "./scenarioSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    shipmentSlice: shipmentReducer,
    vehiclesSlice: vehicleReducer,
    scenarioSlice: scenarioReducer,
  },
});
