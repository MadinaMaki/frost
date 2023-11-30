import "./Header.css"
import logo from "./assets/Frost logo (2).png"
import cart from "./assets/cart.png"
import SearchInput from "../../ui/searchInput/SearchInput";
import Modal from "../../ui/modals/modal/Modal";
import Button, {buttonStyles} from "../../ui/button/Button"
import {useContext, useState} from "react";
import useModal from "../../ui/modals/useModal/useModal";
import LogInModal from "../../ui/modals/log_in_modal/LogInModal";
import {Link} from "react-router-dom";
import Registration from "../../ui/modals/registration_modal/Registration";
import {AuthContext} from "../../context/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {setUser, signOut} from "../../features/auth/authSlice";

function Header() {
    const [loginVisible, loginOpen, loginClose] = useModal();
    const [authVisible, authOpen, authClose] = useModal();
    // const [user, login, logout] = useContext(AuthContext);
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div>
                <Registration visible={loginVisible} close={loginClose}/>
                <LogInModal visible={authVisible} close={authClose}/>
            </div>
            <div className="header-inner container">
                <Link to="/">
                    <img className="header-logo" src={logo}/>
                </Link>
                <div className="contact">
                    <p>
                        <span>г. Астана</span>
                        <span>+7 777 777 77 77</span>
                    </p>
                    <p>
                        <span>г. Алмата</span>
                        <span>+7 777 777 77 77</span>
                    </p>
                </div>
                <SearchInput/>
                <div className="auth">
                    <Link to="/account">
                        <div>
                            {authState.user ? <p>{authState.user.firstName} {authState.user.lastName}</p> : <p onClick={authOpen}>Вход в личный кабинет</p>}
                        </div>
                    </Link>
                    {authState.user ? <p onClick={() => dispatch(signOut())}>Выйти</p> : <p/>}
                    <p onClick={loginOpen} href="#">Зарегистрироваться</p>
                </div>
                <div className="cart">
                    <Link to="/cart">
                        <img className="cart-icon" src={cart} alt="cart"/>
                    </Link>
                    <div className="cart-counter">2</div>
                </div>
            </div>
        </div>
    )
}

export default Header;