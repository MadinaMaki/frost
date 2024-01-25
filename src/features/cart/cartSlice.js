import { createSlice } from "@reduxjs/toolkit";
import {getCartItems} from "./cartAPI";
import cartItem from "../../components/cart_item/CartItem";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action) => {
            state = action.payload;
        },
        setIncrease: (state, action) => {
            // action.payload -> id товара.

        }
    }
});

export const loadCartItems = () => (dispatch) => {
    getCartItems()
        .then((cartItems) => {
            dispatch(setCartItems(cartItems.items));
        });
};

export const {setCartItems, setIncrease} = cartSlice.actions;

export default cartSlice.reducer;