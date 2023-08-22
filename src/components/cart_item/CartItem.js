import Button2 from "../../ui/button2/Button2";
import './CartItem.css';
import {useState} from "react";

function CartItem(props) {
    const [products, setProducts] = useState(props.data);

    return (
        <div>
            <div className="CartItem">
                <div className="product-name">{props.data.name}</div>
                <div className="price table-right">
                    <div className="count">
                        <div onClick={() => props.onMinus()}>–</div>
                        <div>{props.data.count}</div>
                        <div onClick={() => props.onPlus()}>+</div>
                    </div>
                    <div>{products.count * products.price} тг.</div>
                </div>
            </div>
            <div className="product-info">
                <span>Артикул: AC97701</span>
                <Button2 text='Удалить из корзины'/>
            </div>
        </div>
    )
}

export default CartItem;