import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  scenarios: [],
};

export const scenarioSlice = createSlice({
  name: "scenarios",
  initialState,
  reducers: {
    addScenario: (state, action) => {
      const scenarioWithId = {
        id: nanoid(),
        ...action.payload,
      };
      state.scenarios.push(scenarioWithId);
    },
    removeAllScenarios: (state, action) => {
      state.scenarios = [];
    },
    editScenarioByID: (state, action) => {
      const { id, data } = action.payload;
      const index = state.scenarios.findIndex((scenario) => scenario.id === id);
      if (index !== -1) {
        state.scenarios[index] = data;
      }
    },
    deleteScenarioByID: (state, action) => {
      const id = action.payload;
      state.scenarios = state.scenarios.filter(
        (scenario) => scenario.id !== id
      );
    },
  },
});


export const {
  addScenario,
  removeAllScenarios,
  editScenarioByID,
  deleteScenarioByID,
} = scenarioSlice.actions;

export default scenarioSlice.reducer;