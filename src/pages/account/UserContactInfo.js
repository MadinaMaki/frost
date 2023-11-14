import './style.css';
import CartHeader from "../../components/cart_header/CartHeader";
import {Link} from "react-router-dom";
import FormData from "../../ui/form/FormData";
import Button2 from "../../ui/button2/Button2";
import Button, {buttonStyles} from "../../ui/button/Button";
import {useContext, useEffect, useLayoutEffect} from "react";
import {AuthContext} from "../../context/AuthContext";

function UserContactInfo(props) {
    const [user, login, logout] = useContext(AuthContext);

        if(user == null) {
            return (<div>Loading...</div>);
        } else {
            return (
                <div className="container">
                    <div className="cart-header">
                        <CartHeader titleText="Личный кабинет"/>
                    </div>
                    <div className="user-info-menu">
                        <div className="menu">
                            <Link to="/order_history">
                                <a href="#" className="icon1">Мои заказы</a>
                            </Link>
                            <Link to="/contact_details">
                                <a href="#" className="active icon2">Контактные данные</a>
                            </Link>
                            <Link to="/address">
                                <a href="#" className="icon3">Доставка</a>
                            </Link>
                        </div>
                        <div className="main">
                            <div className="title">Контактные данные</div>
                            <div className="form-details">
                                <div className="user-info">
                                    <FormData label="Фамилия">{user.lastName}</FormData>
                                    <FormData label="Имя">{user.firstName}</FormData>
                                    <FormData label="Отчeство"/>
                                </div>
                                <div className="user-info">
                                    <FormData label="E-mail">{user.email}</FormData>
                                    <FormData label="Телефон"/>
                                </div>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button2 text="Изменить пароль"/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button text="Сохранить изменения" buttonStyle={buttonStyles.normal}/>
                    </div>
                </div>
            )
        }



}

export default UserContactInfo;