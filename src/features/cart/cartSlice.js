import {createSlice} from "@reduxjs/toolkit";
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
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].product.id === action.payload) {
                    state.items[i].count++;
                }
            }
        },
        setDecrease: (state, action) => {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].product.id === action.payload) {
                    if (state.items[i].count !== 1) {
                        state.items[i].count--;
                    }
                }
            }
        },
        setDelete: (state, action) => {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].product.id === action.payload) {
                    state.items.splice(i, 1)
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

export const {setCartItems, setIncrease, setDecrease, setDelete} = cartSlice.actions;

export default cartSlice.reducer;
