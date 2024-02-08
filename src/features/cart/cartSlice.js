import { createSlice } from "@reduxjs/toolkit";
import {getCartItems, getIncrease} from "./cartAPI";
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
            // action.payload -> product id
            // items -> [
            //   { id, count },
            //   { id, count },
            //   { id, count },
            // ]
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].product.id === action.payload) {
                    state.items[i].count++;
                }
            }
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
