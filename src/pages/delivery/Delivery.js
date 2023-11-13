import CartHeader from "../../components/cart_header/CartHeader";
import Button, {buttonStyles} from "../../ui/button/Button";
import FormData from "../../ui/form/FormData";
import Navigate from "../../ui/navigate/Navigate";
import './Delivery.css'
import {Link} from "react-router-dom";

function Delivery() {
    return(
        <div className="container">
            <div className="cart-header">
                <CartHeader titleText="Оформление заказа"/>
                <Navigate/>
            </div>
            <div className="main">
                <div className="title">Доставка</div>
                <div className="form-details">
                    <div className="user-info">
                        <FormData label="Область"/>
                        <FormData label="Город или поселок"/>
                    </div>
                    <hr/>
                    <div className="user-info">
                        <FormData label="Улица"/>
                        <div className="form-details">
                            <FormData label="Дом"/>
                            <FormData label="Квартира"/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Link to="/order_complete">
                    <Button text="Оформить заказ" buttonStyle={buttonStyles.normal}/>
                </Link>
            </div>
        </div>
    )
}

export default Delivery;