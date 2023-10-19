import Button2 from "../../ui/button2/Button2";
import './CartItem.css';
import {useState} from "react";

function CartItem(props) {
    const [products, setProducts] = useState(props.data);

    return (
        <div>
            <div className="CartItem">
                <div className="product-name">{props.product_name}</div>
                <div className="price table-right">
                    <div className="count">
                        <div onClick={() => props.decrease()}>–</div>
                        <div>{props.product_count}</div>
                        <div onClick={() => props.increase()}>+</div>
                    </div>
                    <div>{props.product_count * props.product_price} тг.</div>
                </div>
            </div>
            <div className="product-info">
                <span>Артикул: {props.product_code}</span>
                <div onClick={() => props.deleteItem()}>
                    <Button2 text='Удалить из корзины'/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;