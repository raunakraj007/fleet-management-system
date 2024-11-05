import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  shipments: [],
};

export const shipmentSlice = createSlice({
  name: "shipments",
  initialState,
  reducers: {
    addShipments: (state, action) => {
      const shipmentsWithId = action.payload.map((shipment) => ({
        id: nanoid(),
        ...shipment,
      }));
      state.shipments.push(...shipmentsWithId);
    },
    removeAllShipments: (state, action) => {
      state.shipments = [];
    },
    editShipmentByID: (state, action) => {
      const { id, data } = action.payload;
      const index = state.shipments.findIndex((shipment) => shipment.id === id);
      if (index !== -1) {
        state.shipments[index] = data;
      }
    },
    deleteShipmentByID: (state, action) => {
      const id = action.payload;
      state.shipments = state.shipments.filter(
        (shipment) => shipment.id !== id
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
