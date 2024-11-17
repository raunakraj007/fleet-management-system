import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  optimizeRouteRes: null,
};

export const optimizeRouteResSlice = createSlice({
  name: "optimizeRouteRes",
  initialState,
  reducers: {
    addOptimizeRouteRes: (state, action) => {
      state.optimizeRouteRes = action.payload;
    },
  },
});

export const { addOptimizeRouteRes } = optimizeRouteResSlice.actions;
export default optimizeRouteResSlice.reducer;
