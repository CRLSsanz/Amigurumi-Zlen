import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Abuelitos Cariñosos Amigurumi",
    image: "abu1.jpg",
    price: 40,
    bgAvatar: "bg-[url('/image/abu1.jpg')]",
    count: 1,
  },
];

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    listProduct: (state) => state,
    addProduct: (state, action) => {
      state.push(action.payload);
      //[...state,action.payload]
    },
    deleteProduct: (state, action) => {
      //const prodFound = state.find((item) => item.name === action.payload);
      //if (prodFound) {
      //  state.splice(state.indexOf(prodFound), 1);
      //}
      return state.filter((item) => item.name !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = carritoSlice.actions;

export default carritoSlice.reducer;
