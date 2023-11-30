import {createSlice} from "@reduxjs/toolkit";
import {getAccessToken, getUserInfo} from "./authAPI";
import axios from "axios";
import logInModal from "../../ui/modals/log_in_modal/LogInModal";

const initialState = {
    loading: false, // идет ли загрузка данных пользователя или получение токена
    tokenInfo: JSON.parse(localStorage.getItem('tokenInfo')), // информация о токене и времени его жизни
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
            state.user = action.payload;
        }
    }
})

export const checkTokenAndGetUser = () => (dispatch, getState) => {
    const state = getState();
    if(!state.auth.loading) {
        dispatch(setLoading(true));
    }
    if (state.auth.tokenInfo && state.auth.tokenInfo.expiresIn > new Date().getTime()) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${state.auth.tokenInfo.accessToken}`;
        getUserInfo()
            .then(user => {
                dispatch(setUser(user));
            });
    }
    dispatch(setLoading(false));
};

export const signIn = (username, password) => dispatch => {
    dispatch(setLoading(true));
    getAccessToken(username, password)
        .then(tokenInfo => {
            dispatch(setTokenInfo(tokenInfo))
            localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));
            dispatch(checkTokenAndGetUser());
        });
};

export const signOut = () => dispatch => {
    localStorage.removeItem('tokenInfo');
    dispatch(setUser(null));
    dispatch(setTokenInfo(null));
};

export const {setLoading, setTokenInfo, setUser} = authSlice.actions
export default authSlice.reducer;