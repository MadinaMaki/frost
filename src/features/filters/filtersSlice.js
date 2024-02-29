import {createSlice} from "@reduxjs/toolkit";
import {getBrands} from "./filtersAPI";

const initialState = {
    brands: [],
    models: [],
    generations: [],
    selectedBrand: undefined,
    selectedModel: undefined,
    selectedGeneration: undefined,
};

const filtersSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    }
});

export const loadBrands = () => dispatch => {
    getBrands().then((brands) => {

    })
};

export const selectBrand = brandId => dispatch => {
    //
};



export const {  } = filtersSlice.actions;

export default filtersSlice.reducer;