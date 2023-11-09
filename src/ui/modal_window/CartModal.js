import Button, {buttonStyles} from "../button/Button";
import Modal from "../modal/Modal";
import {useEffect, useState} from "react";
import axios from "axios";

function CartModal({product, visible, close, prodID}) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1)
    }, [visible]);

    function productAdd() {
        axios.get('https://frost.runtime.kz/api/cart/add?productId=', {
            params: {
                productId: prodID,
                count: count
            }
        })
            .then(()=>{
            })
    }

    return (
        <Modal visible={visible} close={close} product={product}>
            <h2>Добавить товар в корзину</h2>
            <div className="product-name">{product}</div>
            <div className="cart_counter">
                <span>Укажите количество</span>
                <div onClick={() => {
                    if (count !== 1) setCount(count - 1)}}>-
                </div>
                <div className="count">{count}</div>
                <div onClick={() => setCount(count + 1)}>+</div>
            </div>
            <div className="add_btn" onClick={productAdd}>
                <Button text="Добавить в корзину" buttonStyle={buttonStyles.normal} onClick={close}/>
            </div>
            <p>Продолжить выбор товаров</p>
        </Modal>
    );
}

export default CartModal;
