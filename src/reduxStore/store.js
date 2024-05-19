import { configureStore } from "@reduxjs/toolkit";
import {
  menuSlice,
  dealsGallerySlice,
  newArrivalsGallerySlice,
  shoppingSlice,
  cartSlice,
} from "../features/features";
import { testimonialSlice } from "../features/Testimonials/Testimonials";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    gallery: dealsGallerySlice,
    newArrivalsGallery: newArrivalsGallerySlice,
    testimonial: testimonialSlice,
    shopping: shoppingSlice,
    cart: cartSlice,
  },
});
