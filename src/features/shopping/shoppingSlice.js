import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  dataCopy: [...products],
  dataOnRating: [],
  filteredPrice: [],
  price: null,
  rating: null,
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
      store.rating = rating;
      const newData = (store.dataCopy = products.filter(
        (product) => product.rating.stars === rating
      ));
      store.dataCopy = newData;
      store.dataOnRating = newData;
    },
    filterByPrice: (store, { payload: prices }) => {
      if (prices === "All") {
        store.price = "All";
        store.dataCopy = products.filter(
          (product) => product.rating.stars === store.rating
        );
        store.filteredPrice = [];
        return;
      }
      let newData = [];
      store.dataCopy.forEach((item) =>
        prices.forEach((price) => {
          if (price === item.priceCents) {
            newData.push(item);
          }
        })
      );
      store.dataCopy = newData;
      store.filteredPrice = prices;
    },
  },
});

export default shopping.reducer;

export const { displayAll, filterByRating, filterByPrice } = shopping.actions;

// console.log(
//
// )
