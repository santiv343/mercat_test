import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../utils/types";

type StoreStateType = {
  cart: ProductType[];
};

const initialState: StoreStateType = {
  cart: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (
        !state.cart.find(
          (product) =>
            product.head + product.tail ===
            action.payload.head + action.payload.tail
        )
      ) {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      state.cart = state.cart.filter(
        (product) =>
          product.head + product.tail !==
          action.payload.head + action.payload.tail
      );
    },
  },
});

export const { addToCart } = cart.actions;
export const cartReducer = cart.reducer;
