import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  dataCopy: [...products],
  dataOnRating: [],
  filteredPrice: [],
  price: "All",
  rating: "All",
};

const shopping = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    filterByRating: (store, { payload: rating }) => {
      store.rating = rating;
      if (store.price === "All" && rating === "All") {
        store.dataCopy = [...products];
        return;
      }

      if (store.price === "All" && rating !== "All") {
        store.dataCopy = products.filter(
          (product) => product.rating.stars === rating
        );
        return;
      }

      if (store.price !== "All" && rating === "All") {
        store.dataCopy = products.filter((product) =>
          store.price.includes(product.priceCents)
        );
        return;
      }

      if (store.price !== "All" && rating !== "All") {
        const data = products.filter(
          (product) => product.rating.stars === rating
        );

        store.dataCopy = data.filter((product) =>
          store.price.includes(product.priceCents)
        );
        return;
      }
    },
    filterByPrice: (store, { payload: prices }) => {
      store.price = prices;
      if (prices === "All" && store.rating === "All") {
        store.dataCopy = [...products];

        return;
      }

      if (prices === "All" && store.rating !== "All") {
        store.dataCopy = products.filter(
          (product) => product.rating.stars === store.rating
        );

        return;
      }

      if (prices !== "All" && store.rating === "All") {
        store.dataCopy = products.filter((product) =>
          store.price.includes(product.priceCents)
        );
        return;
      }

      if (prices !== "All" && store.rating !== "All") {
        const data = products.filter((product) =>
          prices.includes(product.priceCents)
        );
        store.dataCopy = data.filter(
          (product) => product.rating.stars === store.rating
        );
        return;
      }
    },
  },
});

export default shopping.reducer;

export const { displayAll, filterByRating, filterByPrice } = shopping.actions;

// console.log(
//
// )
