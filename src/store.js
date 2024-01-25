import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import cartSlice from "./features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartSlice,
    },
});