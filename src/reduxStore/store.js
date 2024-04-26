import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "../features/features";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
});
