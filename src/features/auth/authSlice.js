import {createSlice} from "@reduxjs/toolkit";

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
            // обновить состояние загрузки на true или false
        },
        setTokenInfo: (state, action) => {
            // обновление состояние токена, формат которого должен
            // соответствовать объекту { accessToken, expiresIn }
        },
        setUser: (state, action) => {
            // обновить состояние пользовательской информации, соотвествующей токену
        }
    }
})

export const signIn = (username, password) => dispatch => {
    // TODO
};

export const signOut = () => dispatch => {
    // TODO
};