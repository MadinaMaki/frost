import './ProductItem.css';
import Button, {buttonStyles} from '../../ui/button/Button';
// import data from "bootstrap/js/src/dom/data";
import plug from './assets/plug.png';
import {Link} from "react-router-dom";
import useModal from "../../ui/useModal/useModal";
import ModalWindow from "../../ui/modal_window/ModalWindow";
import axios from "axios";

function ProductItem(props) {
    const [ visible, open, close ] = useModal();

    return (
        <div className="ProductItem col-4">
            <ModalWindow visible={visible} close={close} prodID={props.product_id} product={props.product_name}/>
            <div className="item">
                <img src={plug}/>
                <Link to={"/info/" + props.product_id}>
                    <div className="title">{props.product_name}</div>
                </Link>
                <div className="bottom">
                    <div className="price">{props.product_price} тг.</div>
                    <div onClick={open}>
                        <Button text="Купить" buttonStyle={buttonStyles.normal}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;