import CartHeader from "../../components/cart_header/CartHeader";
import Button, {buttonStyles} from "../../ui/button/Button";
import FormData from "../../ui/form/FormData";
import Navigate from "../../ui/navigate/Navigate";
import {Link, Outlet} from "react-router-dom";
import './ContactDetails.css'

function ContactDetails() {
    return (
        <div className="container">
            <div>
                <div className="cart-header">
                    <CartHeader titleText="Оформление заказа"/>
                    <Navigate/>
                </div>
                <div className="main">
                    <div className="title">Контактные данные</div>
                    <div className="form-details">
                        <div className="user-info">
                            <FormData label="Фамилия"/>
                            <FormData label="Имя"/>
                            <FormData label="Отчeство"/>
                            <FormData label="Телефон"/>
                        </div>
                        <hr/>
                        <div className="user-info">
                            <FormData label="E-mail"/>
                            <FormData label="Пароль"/>
                            <FormData label="Повторите пароль"/>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/delivery">
                        <Button text="Подтвердить" buttonStyle={buttonStyles.normal}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;