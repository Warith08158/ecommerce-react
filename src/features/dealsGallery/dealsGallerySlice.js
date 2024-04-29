import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: 0,
};
export const dealsGallerySlice = createSlice({
  name: "dealsGallery",
  initialState,
  reducers: {
    next: (state) => {
      if (state.image === 2) {
        state.image = 0;
        return;
      }
      state.image = state.image + 1;
    },
    previous: (state) => {
      if (state.image === 0) {
        state.image = 0;
        return;
      }
      state.image = state.image - 1;
    },
  },
});

export default dealsGallerySlice.reducer;
export const { next, previous } = dealsGallerySlice.actions;
