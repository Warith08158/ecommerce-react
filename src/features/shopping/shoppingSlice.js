import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  dataCopy: [...products],
  dataCopy2: [...products],
  dataOnRating: [],
  filteredPrice: [],
  data: null,
  price: "All",
  rating: "All",
  value: "",
  paginationState: 0,
  paginatedData: 0,
  nextTo: 1,
};

const shopping = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    filterByRating: (store, { payload: rating }) => {
      store.nextTo = 1;
      store.paginationState = 0;
      store.value = "";
      store.rating = rating;
      if (store.price === "All" && rating === "All") {
        store.dataCopy = [...products];
        store.dataCopy2 = [...products];
        return;
      }

      if (store.price === "All" && rating !== "All") {
        const data = products.filter(
          (product) => product.rating.stars === rating
        );
        store.dataCopy = data;
        store.dataCopy2 = data;
        return;
      }

      if (store.price !== "All" && rating === "All") {
        const data = products.filter((product) =>
          store.price.includes(product.priceCents)
        );
        store.dataCopy = data;
        store.dataCopy2 = data;
        return;
      }

      if (store.price !== "All" && rating !== "All") {
        const data = products.filter(
          (product) => product.rating.stars === rating
        );

        const data2 = data.filter((product) =>
          store.price.includes(product.priceCents)
        );
        store.dataCopy = data2;
        store.dataCopy2 = data2;
        return;
      }
    },
    filterByPrice: (store, { payload: prices }) => {
      store.nextTo = 1;
      store.paginationState = 0;
      store.value = "";
      store.price = prices;
      if (prices === "All" && store.rating === "All") {
        const data = [...products];
        store.dataCopy = data;
        store.dataCopy2 = data;

        return;
      }

      if (prices === "All" && store.rating !== "All") {
        const data = products.filter(
          (product) => product.rating.stars === store.rating
        );

        store.dataCopy = data;
        store.dataCopy2 = data;

        return;
      }

      if (prices !== "All" && store.rating === "All") {
        const data = products.filter((product) =>
          store.price.includes(product.priceCents)
        );
        store.dataCopy = data;
        store.dataCopy2 = data;
        return;
      }

      if (prices !== "All" && store.rating !== "All") {
        const data = products.filter((product) =>
          prices.includes(product.priceCents)
        );
        const data2 = data.filter(
          (product) => product.rating.stars === store.rating
        );
        store.dataCopy = data2;
        store.dataCopy2 = data2;
        return;
      }
    },

    setPaginationState: (store, { payload }) => {
      console.log(payload);
      store.data = store.dataCopy.slice(payload, payload + 6);
    },

    nextItem: (state, { payload }) => {
      state.nextTo = payload;
    },
    previousItem: (state, { payload }) => {
      state.nextTo = payload;
    },

    searchItem: (state, { payload: searchkeyword }) => {
      state.nextTo = 1;
      state.paginationState = 0;
      state.value = searchkeyword;
      const data = state.dataCopy2.filter((item) =>
        item.name.toLowerCase().includes(searchkeyword.toLowerCase())
      );
      state.dataCopy = data;
    },
  },
});

export default shopping.reducer;

export const {
  displayAll,
  filterByRating,
  filterByPrice,
  searchItem,
  setPaginationState,
  nextItem,
  previousItem,
} = shopping.actions;
