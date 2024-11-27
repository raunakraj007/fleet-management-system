import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipments: [],
};

export const shipmentSlice = createSlice({
  name: "shipments",
  initialState,
  reducers: {
    addShipments: (state, action) => {
      const newShipments = action.payload.filter(
        (shipment) => !state.shipments.some((s) => s._id === shipment._id)
      );
      state.shipments.push(...newShipments);
    },
    removeAllShipments: (state, action) => {
      state.shipments = [];
    },
    editShipmentByID: (state, action) => {
      const { _id, data } = action.payload;
      const index = state.shipments.findIndex(
        (shipment) => shipment._id === _id
      );

      if (index !== -1) {
        state.shipments[index] = data;
        console.log(state.shipments[index]);
      }
    },
    deleteShipmentByID: (state, action) => {
      const _id = action.payload;
      state.shipments = state.shipments.filter(
        (shipment) => shipment._id !== _id
      );
    },
  },
});

export const {
  addShipments,
  removeAllShipments,
  editShipmentByID,
  deleteShipmentByID,
} = shipmentSlice.actions;

export default shipmentSlice.reducer;
