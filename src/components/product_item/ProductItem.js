import './ProductItem.css';
import Button, {buttonStyles} from '../../ui/button/Button';
// import data from "bootstrap/js/src/dom/data";
import plug from './assets/plug.png';
import {Link} from "react-router-dom";
import useModal from "../../ui/useModal/useModal";
import ModalWindow from "../../ui/modal_window/ModalWindow";

function ProductItem(props) {
    const [ visible, open, close ] = useModal();

    return (
        <div className="ProductItem col-4">
            <ModalWindow visible={visible} close={close} product={props.data.name}/>
            <div className="item">
                <img src={plug}/>
                <Link to={"/info/" + props.product_id}>
                    <p className="title">{props.data.name}</p>
                </Link>
                <div className="bottom">
                    <div className="price">{props.data.price} тг.</div>
                    <div onClick={open}>
                        <Button text="Купить" buttonStyle={buttonStyles.normal}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
