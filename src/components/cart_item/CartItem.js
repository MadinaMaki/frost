import Button2 from "../../ui/button2/Button2";
import './CartItem.css';
import {useState} from "react";
import {deleteItem, getDecrease, getIncrease} from "../../features/cart/cartAPI";
import {useDispatch} from "react-redux";
import {setDecrease, setDelete, setIncrease} from "../../features/cart/cartSlice";

function CartItem(props) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState(props.data);

    return (
        <div>
            <div className="CartItem">
                <div className="product-name">{props.product_name}</div>
                <div className="price table-right">
                    <div className="count">
                        <div onClick={() => {
                            getDecrease(products.product.id)
                                .then(() => {
                                    dispatch(setDecrease(products.product.id))
                                })}}>–</div>
                        <div>{props.product_count}</div>
                        <div
                            onClick={() => {
                                getIncrease(products.product.id)
                                    .then(() => {
                                        dispatch(setIncrease(products.product.id));
                                    });
                            }}>+</div>
                    </div>
                    <div>{props.product_count * props.product_price} тг.</div>
                </div>
            </div>
            <div className="product-info">
                <span>Артикул: {props.product_code}</span>
                <div onClick={() => {
                    deleteItem(products.product.id)
                        .then(() => {
                            dispatch(setDelete(products.product.id));
                        });
                }}>
                    <Button2 text='Удалить из корзины'/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;