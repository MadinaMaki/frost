import CartHeader from "../../components/cart_header/CartHeader";
import Button, {buttonStyles} from "../../ui/button/Button";
import FormData from "../../ui/form/FormData";
import Navigate from "../../ui/navigate/Navigate";
import { Outlet } from "react-router-dom";

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
                        <div className="user-info">
                            <FormData label="E-mail"/>
                            <FormData label="Пароль"/>
                            <FormData label="Повторите пароль"/>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button text="Подтвердить" buttonStyle={buttonStyles.normal}/>
                </div>
            </div>
            {/*<Outlet/>*/}
        </div>
    )
}

export default ContactDetails;