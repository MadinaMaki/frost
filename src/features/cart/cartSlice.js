import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIncrease: (state, action) => {

        }
    }
});

export const {setIncrease} = cartSlice.actions;
export default cartSlice.reducer;