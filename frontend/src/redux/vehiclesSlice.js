import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicles: [],
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    addVehicles: (state, action) => {
      console.log("Payload Length:", action.payload.length);
      console.log("Payload Content:", action.payload);
      const newVehicles = action.payload.filter(
        (vehicle) => !state.vehicles.some((v) => v._id === vehicle._id)
      );
      state.vehicles.push(...newVehicles);
      console.log("Updated State:", state.vehicles);
    },
    editVehicleByID: (state, action) => {
      const _id = action.payload._id;
      const index = state.vehicles.findIndex((vehicle) => vehicle._id === _id);
      if (index !== -1) {
        state.vehicles[index] = action.payload;
        console.log(state.vehicles[index]);
      }
    },
    deleteVehicleByID: (state, action) => {
      const _id = action.payload;
      state.vehicles = state.vehicles.filter((vehicle) => vehicle._id !== _id);
    },
    removeAllVehicles: (state) => {
      state.vehicles = [];
    },
  },
});

export const {
  addVehicles,
  removeAllVehicles,
  editVehicleByID,
  deleteVehicleByID,
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
