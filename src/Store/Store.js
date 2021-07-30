import { configureStore } from "@reduxjs/toolkit";
import SuperHeroeSlice from "./Slices/SuperHeroeSlice";
import LoadingSlice from "./Slices/LoadingSlice";
export default configureStore({
  reducer: {
    superHeroe: SuperHeroeSlice,
    loading: LoadingSlice,
  },
});
