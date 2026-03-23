import { configureStore } from "@reduxjs/toolkit"; // ✅ THIS LINE IS MISSING
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  }
});