import Button, {buttonStyles} from "../button/Button";
import './Navigate.css';
import {Link} from "react-router-dom";

function Navigate() {
    return (
        <div className="cart-nav">
            {/*<Link to='/'>*/}
                <Button text="Корзина" buttonStyle={buttonStyles.normal}/>
            {/*</Link>*/}
            {/*<Link to='/contact'>*/}
                <Button text="Контактные данные"/>
            {/*</Link>*/}
            {/*<Link to='/delivery'>*/}
                <Button text="Доставка"/>
            {/*</Link>*/}
            {/*<Link to='complete'>*/}
                <Button text="Завершение"/>
            {/*</Link>*/}
        </div>
    )
}

export default Navigate;