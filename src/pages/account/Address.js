import './style.css';
import CartHeader from "../../components/cart_header/CartHeader";
import {Link} from "react-router-dom";
import Button, {buttonStyles} from "../../ui/button/Button";
import FormData from "../../ui/form/FormData";
import Button2 from "../../ui/button2/Button2";

function Address() {
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
                        <a href="#" className="icon2">Контактные данные</a>
                    </Link>
                    <Link to="/address">
                        <a href="#" className="active icon3">Доставка</a>
                    </Link>
                </div>
                <div className="main">
                    <div className="title">Доставка</div>
                    <div className="form-details">
                        <div className="user-info">
                            <FormData label="Страна"/>
                            <FormData label="Регион / область"/>
                            <FormData label="Город или поселок"/>
                        </div>
                        <div className="user-info">
                            <FormData label="E-mail"/>
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

export default Address;