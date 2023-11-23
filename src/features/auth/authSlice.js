import {createSlice} from "@reduxjs/toolkit";
import {getAccessToken} from "./authAPI";
import axios from "axios";

const initialState = {
    loading: false, // идет ли загрузка данных пользователя или получение токена
    tokenInfo: null, // информация о токене и времени его жизни
    user: null, // информация о пользователе соответсвующая токену доступа
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setTokenInfo: (state, action) => {
            state.tokenInfo = action.payload;
        },
        setUser: (state, action) => {
            // обновить состояние пользовательской информации, соотвествующей токену
        }
    }
})

export const checkTokenAndGetUser = () => (dispatch, getState) => {
    const state = getState();
    if(!state.auth.loading) {
        dispatch(setLoading(true));
    }
    if (state.auth.tokenInfo && state.auth.tokenInfo.expiresIn > new Date().getTime()) {
        axios.defaults.headers.common['Authorization'] = `Bearer${state.auth.tokenInfo.accessToken}`
    }
    dispatch(setLoading(false));
};

export const signIn = (username, password) => dispatch => {
    dispatch(setLoading(true));
    getAccessToken(username, password)
        .then(tokenInfo => {
            dispatch(setTokenInfo(tokenInfo))
            localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));
            dispatch(checkTokenAndGetUser())
        });
};

export const signOut = () => dispatch => {
    // TODO
};

export

export const {setLoading, setTokenInfo, setUser} = authSlice.actions
export default authSlice.reducer;