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
      //   if (itemExists) {
      //     itemExists.quantity++;
      //     return;
      //   }
      //   state.cartItem.push(itemId);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
