import { createSlice } from "@reduxjs/toolkit";
import { testimonials } from "../../data/Testimonials/Testimonial";

const initialState = {
  testimonials_: testimonials,
  card1: 0,
  card2: 1,
  card3: 2,
};

const testmonialSlice = createSlice({
  name: "testimonalslice",
  initialState,
  reducers: {
    previous: (state, { payload: current }) => {
      console.log(current);
      if (current === 0) {
        return;
      }
      state.card1 = state.card1 - 1;
      state.card2 = state.card2 - 1;
      state.card3 = state.card3 - 1;
    },
    next: (state, { payload: current }) => {
      console.log(current);
      if (current === state.testimonials_.length - 1) {
        return;
      }
      state.card1 = state.card1 + 1;
      state.card2 = state.card2 + 1;
      state.card3 = state.card3 + 1;
    },
  },
});

export default testmonialSlice.reducer;

export const { previous, next } = testmonialSlice.actions;
