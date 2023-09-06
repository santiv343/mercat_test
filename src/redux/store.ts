import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { productsApi } from "./services/products/productsApi";

export const store = configureStore({
  reducer: {
    cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
