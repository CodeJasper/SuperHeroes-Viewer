import { createSlice } from "@reduxjs/toolkit";

export const SuperHeroeSlice = createSlice({
  name: "superHeroe",
  initialState: {},
  reducers: {
    addSuperHeroe: (state, action) => {
      state = action;
    },
  },
});

export const { addSuperHeroe } = SuperHeroeSlice.actions;

export default SuperHeroeSlice.reducer;
