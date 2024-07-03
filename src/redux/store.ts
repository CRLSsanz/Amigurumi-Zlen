import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import carritoSlice from "./features/cartSlice";
import filterSlice from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    carrito: carritoSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
