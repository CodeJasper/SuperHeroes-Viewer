import { createSlice } from "@reduxjs/toolkit";

export const LoadingSlice = createSlice({
  name: "loading",
  initialState: { loading: false },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action;
    },

    getLoading: (state) => {
      return state.loading;
    },
  },
});

export const { setLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
