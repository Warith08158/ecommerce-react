import { configureStore } from "@reduxjs/toolkit";
import { menuSlice, dealsGallerySlice } from "../features/features";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    gallery: dealsGallerySlice,
  },
});
