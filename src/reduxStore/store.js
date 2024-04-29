import { configureStore } from "@reduxjs/toolkit";
import {
  menuSlice,
  dealsGallerySlice,
  newArrivalsGallerySlice,
} from "../features/features";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    gallery: dealsGallerySlice,
    newArrivalsGallery: newArrivalsGallerySlice,
  },
});
