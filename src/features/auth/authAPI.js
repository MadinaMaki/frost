import axios from "axios";

export const getAccessToken = async (username, password) => {
        let response = await axios.post('/auth/token', { username, password });
        return {
            accessToken: response.data['access_token'],
            expiresIn: new Date().getTime() + response.data['expires_in']
        };
};

export const getUserInfo = async() => {
    let response = await axios.post('/auth/user');
    return response.data;
};