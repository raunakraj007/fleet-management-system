import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import shipmentReducer from "./shipmentSlice";
import vehicleReducer from "./vehiclesSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    shipmentSlice: shipmentReducer,
    vehiclesSlice: vehicleReducer,
  },
});
