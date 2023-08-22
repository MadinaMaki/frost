import './CartHrader.css'
import {Outlet} from "react-router-dom";

function CartHeader(props) {
    return(
        <div>
            <div className="cart-title">{props.titleText}</div>
        </div>
    )
}

export default CartHeader;