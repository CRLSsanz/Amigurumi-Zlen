import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import carritoSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    carrito: carritoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
