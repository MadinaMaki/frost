import Button, {buttonStyles} from "../button/Button";
import './Navigate.css';
import {useState} from "react";

function Navigate() {

    const [buttons, setButtons] = useState([
        <Button text="Корзина"/>,
        <Button text="Контактные данные"/>,
        <Button text="Доставка"/>,
        <Button text="Завершение"/>
    ]);

    return (
        <div className="cart-nav">
            {buttons.map((button, index) => {
                return (
                    <div key={index}>{button}</div>
                )
            })}
        </div>
    )
}

export default Navigate;