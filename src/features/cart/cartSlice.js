import { createSlice } from "@reduxjs/toolkit";
import {getCartItems} from "./cartAPI";
import cartItem from "../../components/cart_item/CartItem";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        },
        setIncrease: (state, action) => {

        }
    }
});

// export const increase = () => (dispatch) => {
//
// }

export const loadCartItems = () => (dispatch) => {
    getCartItems()
        .then((cartItems) => {
            dispatch(setCartItems(cartItems.items));
        });
};

export const {setCartItems, setIncrease} = cartSlice.actions;

export default cartSlice.reducer;
