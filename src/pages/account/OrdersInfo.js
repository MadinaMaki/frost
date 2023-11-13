import CartHeader from "../../components/cart_header/CartHeader";
import './style.css';
import {Link} from "react-router-dom";
import Navigate from "../../ui/navigate/Navigate";
import Button, {buttonStyles} from "../../ui/button/Button";

function OrdersInfo() {
    return (
        <div className="container">
            <div className="cart-header">
                <CartHeader titleText="Личный кабинет"/>
            </div>
            <div className="user-info-menu">
                <div className="menu">
                    <Link to="/order_history">
                        <a href="#" className="active">Мои заказы</a>
                    </Link>
                    <Link to="/contact_details">
                        <a href="#">Контактные данные</a>
                    </Link>
                    <Link to="/address">
                        <a href="#">Доставка</a>
                    </Link>
                </div>
                <div className="main">
                    <div className="title">История заказов</div>
                    <div className="table-head">
                        <div className="table-cell">
                            <div>Номер заказа</div>
                            <div>Наименование товара</div>
                        </div>
                        <div className="table-cell">
                            <div>Дата заказа</div>
                            <div>Стоимость</div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default OrdersInfo;