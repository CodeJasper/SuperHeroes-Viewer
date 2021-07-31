import { createSlice } from "@reduxjs/toolkit";

export const SuperHeroeSlice = createSlice({
  name: "superHeroe",
  initialState: {},
  reducers: {
    addSuperHeroe: (state, action) => {
      state.heroe = action.payload;
    },
  },
});

export const { addSuperHeroe } = SuperHeroeSlice.actions;

export default SuperHeroeSlice.reducer;
