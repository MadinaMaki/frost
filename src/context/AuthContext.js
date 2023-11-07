import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = props => {
    const [tokenInfo, setTokenInfo] = useState(JSON.parse(localStorage.getItem('tokenInfo')));

    const [user, setUser] = useState(null);

    useEffect(() => {

        if (tokenInfo && new Date(tokenInfo.expiresToken) > new Date()) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${tokenInfo.accessToken}`;
            axios
                .post('https://frost.runtime.kz/api/auth/user')
                .then(response => {
                    let data = response.data;
                    setUser(data);
                })
        }
    }, [tokenInfo]);

    const login = (username, password) => {
        axios
            .post('https://frost.runtime.kz/api/auth/token', {username, password})
            .then(response => {
                let data = response.data;
                let tokenInfo = {
                    accessToken: data.access_token,
                    expiresToken: new Date(new Date().getTime() + data.expires_in * 1000),
                };
                localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));
                setTokenInfo(tokenInfo);
            })
    }

    const logout = () => {
        localStorage.removeItem('tokenInfo');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={[user, login, logout]}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;