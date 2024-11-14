import { createSlice, nanoid } from "@reduxjs/toolkit";

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
      const vehiclesWithId = action.payload.map((vehicle, index) => {
        console.log(`Processing vehicle at index ${index}:`, vehicle);
        if (!vehicle) {
          console.log(
            `Skipped vehicle at index ${index} due to invalid data:`,
            vehicle
          );
          return null;
        }
        const newVehicle = { id: nanoid(), ...vehicle };
        console.log("New Vehicle:", newVehicle);
        return newVehicle;
      });
      const validVehicles = vehiclesWithId.filter((v) => v !== null);
      console.log("Valid Vehicles With ID:", validVehicles);
      state.vehicles.push(...validVehicles);
      console.log("Updated State:", state.vehicles);
    },
    editVehicleByID: (state, action) => {
      const { id, data } = action.payload;
      const index = state.vehicles.findIndex((vehicle) => vehicle.id === id);
      if (index !== -1) {
        state.vehicles[index] = data;
      }
    },
    deleteVehicleByID: (state, action) => {
      const id = action.payload;
      state.vehicles = state.vehicles.filter((vehicle) => vehicle.id !== id);
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
