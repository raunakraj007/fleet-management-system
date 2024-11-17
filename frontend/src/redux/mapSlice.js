import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routeIndex: null,
};

export const mapSlice = createSlice({
  name: "Map",
  initialState,
  reducers: {
    addRouteIndex: (state, action) => {
      state.routeIndex = action.payload;
    },
  },
});

export const { addRouteIndex } = mapSlice.actions;
export default mapSlice.reducer;
