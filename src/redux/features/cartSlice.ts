import { createSlice } from "@reduxjs/toolkit";

type Product = {
  name: string;
  image: string;
  price: number;
  bgAvatar: string;
  qty: number;
  category?: string;
};

const initialState: Product[] = [];

export const cartSlice = createSlice({
  name: "cartReducers",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      //return [...state, { ...action.payload, qty: 3 }];
    },
    removeFromCart: (state, action) => {
      //const prodFound = state.find((item) => item.name === action.payload);
      //if (prodFound) {
      //  state.splice(state.indexOf(prodFound), 1);
      //}
      return state.filter((item) => item.name !== action.payload);
    },
    changeCartQty: (state, action) => {
      state.filter((item) =>
        item.name === action.payload.name
          ? (item.qty = action.payload.qty)
          : item.qty
      );
    },
  },
});

export const { addToCart, removeFromCart, changeCartQty } = cartSlice.actions;

export default cartSlice.reducer;
