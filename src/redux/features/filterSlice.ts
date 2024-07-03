import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byA_Z: true,
  byCategory: "",
  byFastDelivery: false,
  byStock: false,
  byRating: 0,
  searchQuery: "",
  sort: "",
};

export const filterSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    filterByAlfabeto: (state, action) => {
      return { ...state, byA_Z: !action.payload };
    },

    filterByPrice: (state, action) => {
      return { ...state, sort: action.payload };
    },

    filterByCategory: (state, action) => {
      //state.filter((item) => item.category === action.payload);
      return { ...state, byCategory: action.payload };
    },

    filterByStock: (state, action) => {
      return { ...state, byStock: !action.payload };
    },

    filterByRating: (state, action) => {
      return { ...state, byRating: action.payload };
    },

    filterByFastDelivery: (state, action) => {
      return { ...state, byFastDelivery: !action.payload };
    },

    filterBySearch: (state, action) => {
      return { ...state, searchQuery: action.payload };
    },
    clearFilter: (state) => {
      return {
        byA_Z: false,
        byCategory: "",
        byFastDelivery: false,
        byStock: false,
        byRating: 0,
        searchQuery: "",
        sort: "",
      };
    },
  },
});

export const {
  clearFilter,
  filterByAlfabeto,
  filterByCategory,
  filterByFastDelivery,
  filterByPrice,
  filterByRating,
  filterBySearch,
  filterByStock,
} = filterSlice.actions;

export default filterSlice.reducer;
