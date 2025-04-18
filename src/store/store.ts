import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cart.slice";
import { authSlice } from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});
