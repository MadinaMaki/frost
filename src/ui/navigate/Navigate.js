import Button, {buttonStyles} from "../button/Button";
import './Navigate.css';

function Navigate() {
    return (
        <div className="cart-nav">
            <Button text="Корзина" buttonStyle={buttonStyles.normal}/>
            <Button text="Контактные данные"/>
            <Button text="Доставка"/>
            <Button text="Завершение"/>
        </div>
    )
}

export default Navigate;