import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  userDetails: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userDetails = action.payload;
    },
    removeUser: (state, action) => {
      state.userDetails = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
