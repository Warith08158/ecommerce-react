import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  dataCopy: [...products],
  dataOnRating: [],
};

const shopping = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    displayAll: (state) => {
      state.dataCopy = [...products];
      state.dataOnRating = [...products];
    },
    filterByRating: (store, { payload: rating }) => {
      const newData = (store.dataCopy = products.filter(
        (product) => product.rating.stars === rating
      ));
      store.dataCopy = newData;
      store.dataOnRating = newData;
    },
    filterByPrice: (store, { payload: prices }) => {
      let newData = [];
      store.dataCopy.forEach((item) =>
        prices.forEach((price) => {
          if (price === item.priceCents) {
            newData.push(item);
          }
        })
      );

      store.dataCopy = newData;
    },
  },
});

export default shopping.reducer;

export const { displayAll, filterByRating, filterByPrice } = shopping.actions;

// console.log(
//
// )
