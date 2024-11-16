import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  scenarios: null,
};

export const scenarioSlice = createSlice({
  name: "scenarios",
  initialState,
  reducers: {
    addScenario: (state, action) => {
      state.scenarios = action.payload;
    },
    removeScenario:(state, action) => {
      state.scenarios = null;
    },
  },
});


export const {
  addScenario,
  removeScenario
} = scenarioSlice.actions;

export default scenarioSlice.reducer;