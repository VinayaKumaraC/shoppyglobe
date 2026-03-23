import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    search: "",
    category: "all",
    priceRange: 2000,
    rating: 0,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    setRating: (state, action) => {
      state.rating = action.payload;
    },

    // 🔁 RESET FILTERS
    resetFilters: (state) => {
      state.search = "";
      state.category = "all";
      state.priceRange = 2000;
      state.rating = 0;
    },
  },
});

export const {
  setSearch,
  setCategory,
  setPriceRange,
  setRating,
  resetFilters,
} = productSlice.actions;

export default productSlice.reducer;
