import {createSlice} from "@reduxjs/toolkit";
import {getBrands, getGenerations, getModels, getProducts} from "./filtersAPI";

const initialState = {
    productPage: [],
    page: {},
    brands: [{text: 'Все марки', value: null}],
    models: [{text: 'Все модели', value: null}],
    generations: [{text: 'Все поколения', value: null}],
    filter: {
        selectedBrand: undefined,
        selectedModel: undefined,
        selectedGeneration: undefined,
        available: 0
    },
};

const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.productsPage = action.payload;
        },
        setPageState: (state, action) => {
            state.pages = action.payload;
        },
        setBrands: (state, action) => {
            state.brands = action.payload;
        },
        setModels: (state, action) => {
            state.models = action.payload;
        },
        setGenerations: (state, action) => {
            state.generations = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const PageChange = (page, filter) => (dispatch) => {
    getProducts(page, filter)
        .then(response => {
            dispatch(setProducts(response.items));
            dispatch(setPageState(response));
        });
};

export const loadBrands = () => (dispatch, getState) => {
    const state = getState();
    getBrands()
        .then((brands => {
            dispatch(setBrands([...state.filter.brands,
                ...brands.map(item => ({text: item.name, value: item.id}))]))
        }))
};

let models = [{text: 'Все модели', value: null}];
let generations = [{text: 'Все поколения', value: null}];

export const loadModels = brandId => dispatch => {
    if (brandId === null) {
        dispatch(setModels(''));
    } else {
        getModels(brandId)
            .then(modelsAPI => {
                models.push(...modelsAPI.map(item => ({text: item.name, value: item.id})))
                dispatch(setModels(models));
            })
    }
};

export const loadGenerations = modelId => dispatch => {

}

export const {setProducts, setPageState, setBrands, setModels} = filtersSlice.actions;

export default filtersSlice.reducer;