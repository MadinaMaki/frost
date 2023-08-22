import Button2 from "../../ui/button2/Button2";
import complete from './icons/complete.png';
import './orderComplete.css';
import CartHeader from "../../components/cart_header/CartHeader";
import Navigate from "../../ui/navigate/Navigate";

function OrderComplete() {
    return(
        <div className="container">
            <div className="cart-header">
                <CartHeader titleText="Оформление заказа"/>
                <Navigate/>
            </div>
            <div className="main">
                <div className="title">Заказ успешно создан</div>
                <div className="order-complete">
                    <img src={complete}/>
                    <p>
                        Заказ №100001 был создан. Вы можете просмотреть список всех
                        <br/>
                        ваших заказов в личном кабинете.
                    </p>
                    <Button2 text="Перейти в личный кабинет"/>
                </div>
            </div>
        </div>
    )
}

export default OrderComplete;