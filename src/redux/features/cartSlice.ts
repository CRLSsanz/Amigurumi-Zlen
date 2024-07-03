import { createSlice } from "@reduxjs/toolkit";

type Product = {
  name: string;
  image: string;
  price: number;
  bgAvatar: string;
  count: number;
  category?: string;
};

const initialState: Product[] = [];

export const cartSlice = createSlice({
  name: "cartReducers",
  initialState,
  reducers: {
    listProduct: (state) => state,
    addToCart: (state, action) => {
      //state.push(action.payload);
      //return [...state, action.payload];
      return [...state, { ...action.payload, count: 1 }];
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
          ? (item.count = action.payload.count)
          : item.count
      );
    },
  },
});

export const { addToCart, removeFromCart, changeCartQty } = cartSlice.actions;

export default cartSlice.reducer;
