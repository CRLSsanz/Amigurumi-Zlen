import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byCategory: "",
  byStock: false,
  searchQuery: "",
};

export const filterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      //state.filter((item) => item.category === action.payload);
      return { ...state, byCategory: action.payload };
    },
    filterByStock: (state, action) => {
      //state.filter((item) => item.category === action.payload);
      return { ...state, byStock: !action.payload };
    },
    filterByRating: (state) => state,
    filterBySearch: (state, action) => {
      return { ...state, searchQuery: action.payload };
    },
  },
});

export const { filterByCategory, filterByStock, filterBySearch } =
  filterSlice.actions;

export default filterSlice.reducer;
