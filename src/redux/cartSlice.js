import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ✅ ADD TO CART
    addToCart: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    // ✅ REMOVE ITEM
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    // ✅ INCREASE QTY
    increaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    // ✅ DECREASE QTY
    decreaseQty: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // ✅ CLEAR CART
    clearCart: () => {
      return [];
    },

  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;