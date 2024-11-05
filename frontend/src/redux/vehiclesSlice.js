import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicles: [],
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducer: {
    addVehicles: (state, action) => {
      const vehiclesWithId = action.payload.map((vehicle) => ({
        id: nanoid(),
        ...vehicle,
      }));
      state.vehicles.push(...vehiclesWithId);
    },
    removeAllVehicles: (state, action) => {
      state.vehicles = [];
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
  },
});

export const {
  addVehicles,
  removeAllVehicles,
  editVehicleByID,
  deleteVehicleByID,
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
