import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  products: [...products],
  productsCopy: [...products],
  filterBy: "All",
  loadMore: true,
  displayProducts: 8,
};
const newArrivalsGallery = createSlice({
  name: "newArrivalsGallery",
  initialState,
  reducers: {
    showAll: (state, { payload: type }) => {
      if (state.filterBy === type) {
        return;
      }
      state.filterBy = type;
      if (type === "All") {
        state.productsCopy = [...products];
        state.loadMore = true;
        return;
      }
      state.productsCopy = state.products.filter((product) =>
        product.keywords.includes(type)
      );
      if (state.productsCopy.length < 9) {
        state.loadMore = false;
      } else {
        state.loadMore = true;
      }
    },
    showMore: (state) => {
      if (state.products.length === state.displayProducts) {
        return;
      }
      state.displayProducts += 8;
    },
    reset: (state) => {
      state.displayProducts = 8;
    },
  },
});

export default newArrivalsGallery.reducer;
export const { showAll, showMore, reset } = newArrivalsGallery.actions;
