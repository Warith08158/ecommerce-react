import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, { payload: itemId }) => {
      const itemExists = state.cartItem.find((item) => item.id === itemId);
      if (itemExists) {
        state.cartItem.find((item) => item.id === itemId).quantity++;
        return;
      }
      state.cartItem.push({
        id: itemId,
        quantity: 1,
      });
    },
    reduceItem: (state, { payload: itemId }) => {
      console.log(itemId);
      const itemExists = state.cartItem.find((item) => item.id === itemId);
      if (itemExists) {
        if (state.cartItem.find((item) => item.id === itemId).quantity <= 1) {
          state.cartItem = state.cartItem.filter((item) => item.id !== itemId);
          return;
        }
        state.cartItem.find((item) => item.id === itemId).quantity--;
        return;
      }
      // state.cartItem.push({
      //   id: itemId,
      //   quantity: 1,
      // });
    },
    removeFromCart: (state, { payload: itemId }) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== itemId);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, reduceItem, removeFromCart } = cartSlice.actions;
