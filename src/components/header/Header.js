import "./Header.css"
import logo from "./assets/Frost logo (2).png"
import cart from "./assets/cart.png"
import SearchInput from "../../ui/searchInput/SearchInput";
import Modal from "../../ui/modal/Modal";
import Button, {buttonStyles} from "../../ui/button/Button"
import {useState} from "react";
import useModal from "../../ui/useModal/useModal";
import LogInModal from "../../ui/log_in_modal/LogInModal";
import {Link} from "react-router-dom";

function Header() {
    const [loginVisible, loginOpen, loginClose] = useModal();
    const [authVisible, authOpen, authClose] = useModal();

    return (
        <div className="header">
            <div>
                <Modal visible={loginVisible} close={loginClose}>
                    <h2>Создание учетной записи</h2>
                    <div className="user_name">
                        <input placeholder="Имя"/>
                        <input placeholder="Фамилия"/>
                    </div>
                    <input placeholder="Адрес электронной почты"/>
                    <input placeholder="Пароль" type="password"/>
                    <input placeholder="Повторите пароль" type="password"/>
                    <Button text={"Зарегистрироваться"} buttonStyle={buttonStyles.normal}/>
                    <p>Вход в существующую учётную запись</p>
                </Modal>
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
                    <a onClick={authOpen} href="#">Вход в личный кабинет</a>
                    <a onClick={loginOpen} href="#">Зарегистрироваться</a>
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