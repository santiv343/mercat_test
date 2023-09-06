import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../utils/types";
import {
  checkItemAlreadyInCart,
  getProductIdentifier,
} from "../../utils/utils";

export type CartItemType = {
  product: ProductType;
  quantity: number;
};

type StoreStateType = {
  cart: CartItemType[];
};

const initialState: StoreStateType = {
  cart: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      if (
        !checkItemAlreadyInCart(
          state.cart,
          getProductIdentifier(action.payload.product)
        )
      ) {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (item) => getProductIdentifier(item.product) !== action.payload
      );
    },
    increaseProductQty: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex(
        (item) => getProductIdentifier(item.product) === action.payload
      );

      if (productIndex !== -1) {
        state.cart[productIndex].quantity =
          state.cart[productIndex].quantity + 1;
        state.cart = [...state.cart];
      }
    },
    decreaseProductQty: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex(
        (item) => getProductIdentifier(item.product) === action.payload
      );

      if (productIndex !== -1) {
        if (state.cart[productIndex].quantity <= 1) {
          state.cart = state.cart.filter(
            (item) => getProductIdentifier(item.product) !== action.payload
          );
        } else {
          state.cart[productIndex].quantity =
            state.cart[productIndex].quantity - 1;
          state.cart = [...state.cart];
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseProductQty,
  decreaseProductQty,
} = cart.actions;
export const cartReducer = cart.reducer;
