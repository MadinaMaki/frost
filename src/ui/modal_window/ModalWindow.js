import Button, {buttonStyles} from "../button/Button";
import Modal from "../modal/Modal";
import {useEffect, useState} from "react";

function ModalWindow({product, visible, close}) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1)
    }, [visible]);

    return (
        <Modal visible={visible} close={close}>
            <h2>Товар добавлен в корзину</h2>
            <div className="product-name">{product}</div>
            <div className="cart_counter">
                <span>Укажите количество</span>
                <div onClick={() => {
                    if (count !== 1) setCount(count - 1)
                }}>-</div>
                <div className="count">{count}</div>
                <div onClick={() => setCount(count + 1)}>+</div>
            </div>
            <Button text="Оформить заказ" buttonStyle={buttonStyles.normal}/>
            <p>Продолжить выбор товаров</p>
        </Modal>
    );
}

export default ModalWindow;
