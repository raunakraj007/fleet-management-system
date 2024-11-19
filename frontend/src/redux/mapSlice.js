import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routeIndex: null,
  autoCompleteId: null,
};

export const mapSlice = createSlice({
  name: "Map",
  initialState,
  reducers: {
    addRouteIndex: (state, action) => {
      state.routeIndex = action.payload;
    },
    addAutoCompleteId: (state, action) => {
      state.autoCompleteId = action.payload;
    },
  },
});

export const { addRouteIndex, addAutoCompleteId } = mapSlice.actions;
export default mapSlice.reducer;
