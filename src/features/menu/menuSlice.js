import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    close: (state) => {
      state.isOpen = false;
    },
    open: (state) => {
      state.isOpen = true;
    },
  },
});

export default menuSlice.reducer;
export const { close, open } = menuSlice.actions;
