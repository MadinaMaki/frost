import './ProductCard.css';
import Button, {buttonStyles} from "../../ui/button/Button";
import Button2 from "../../ui/button2/Button2";
import ProductPhoto from "../product_photo/ProductPhoto";
import Comment from "../comment/Comment";
import DropMenu from "../../ui/drop_menu/DropMenu";
import {useEffect, useState} from "react";
import axios from "axios";
import useModal from "../../ui/useModal/useModal";
import ModalWindow from "../../ui/modal_window/ModalWindow";
import LogInModal from "../../ui/log_in_modal/LogInModal";
import {useParams} from "react-router-dom";
import pic1 from "./assets/5003-01 (1).png";
import pic2 from "./assets/5003-02 (1).png";
import pic3 from "./assets/5003-03 (1).png";
import pic4 from "./assets/5003-04 (1).png";
import mainPic from "./assets/main-picture.png";
import data from "bootstrap/js/src/dom/data";

function ProductCard(props) {
    const [productPhoto, setProductPhoto] = useState([pic1, pic2, pic3, pic4]);
    const [mainPhoto, setMainPhoto] = useState(mainPic);
    const [reviews, setReviews] = useState([]);
    const [product, setProduct] = useState({
        id: undefined,
        category: undefined,
        available: undefined,
        code: undefined,
        manufactured: undefined,
        description: undefined,
        name: undefined,
        price: undefined
    })
    const [visible, open, close] = useModal();
    const [authVisible, authOpen, authClose] = useModal();

    // const PRODUCT_ID = 3;

    const params = useParams();

    let reviewURL = 'http://frost.runtime.kz/reviews';
    let productsURL = 'http://frost.runtime.kz/products';

    function clickPhoto(index) {
        setMainPhoto(function (){
            setProductPhoto( (prevPhoto) => {
                let newPhoto;
                newPhoto = prevPhoto[index];
                return newPhoto;
            });
        });
    }

    useEffect(() => {
        axios
            .get(reviewURL, {
                params: {
                    productId: params.product_id
                }
            })
            .then((response) => {
                let data = response.data.map(item => ({
                    id: item.id,
                    review: item.review,
                    user: {
                        firstName: item.user.firstName,
                        id: item.user.id,
                        lastName: item.user.lastName
                    }
                }));
                setReviews([...data])
            });
    },[])

    useEffect(() => {
        axios
            .get(productsURL + "/" + params.product_id)
            .then((response) => {
                let data = response.data;
                setProduct({
                    id: data.id,
                    category:data.category,
                    available: data.available,
                    code: data.code,
                    manufactured: data.manufactured,
                    description: data.description,
                    name: data.name,
                    price: data.price
                })
            })
    }, [])

    console.log(product)

    return (
        <div className="container">
            <div className="product-container">
                <ModalWindow visible={visible} close={close}/>
                <LogInModal visible={authVisible} close={authClose}/>
                <div className="left-side">
                    <div className="product-main-img">
                        <img src={mainPhoto} alt="product"/>
                    </div>
                    <div className="product-img">
                        {productPhoto.map(function (photo, index){
                            return(
                                <div key={index}>
                                    <img onClick={() => clickPhoto(index)} src={photo}/>
                                </div>
                            )
                        })}
                    </div>
                    <p>Применим к автомобилям:</p>
                    <DropMenu/>
                </div>
                <div className="right-side">
                    <div className="about">
                        <div>
                            <h2>{data.name}</h2>
                            <div className="">
                                <p>Артикул: <span>{data.code}</span>
                                </p>
                                <p>Производитель: <span>{data.manufacturer}</span>
                                </p>
                                <p>Описание: <span>{data.description}</span>
                                </p>
                            </div>
                        </div>
                        <div className="product-price">
                            <h2>{data.price} тг.</h2>
                            <div>
                                <p>в наличии</p>
                                <p>г. Астана</p>
                                <p>г. Алматы</p>
                            </div>
                            <div onClick={open}>
                                <Button text="Купить" buttonStyle={buttonStyles.normal}/>
                            </div>
                        </div>
                    </div>
                    <div className="about">
                        <div>
                            <h2>Отзывы</h2>
                            <div>
                                <div style={{display: "flex"}}>
                                    <span style={{margin: "0 5px 0 0"}}>Чтобы оставить отзыв</span>
                                    <div onClick={authOpen}>
                                        <Button2 text="войдите на сайт"/>
                                    </div>
                                </div>
                            </div>
                            <Comment data={reviews}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;


{/*{product.map((item, index) => {*/}
{/*    return (*/}
{/*        <div key={index}>*/}
{/*            <div>*/}
{/*                <h2>{item.name}</h2>*/}
{/*                <div className="">*/}
{/*                    <p>Артикул: <span>{item.code}</span>*/}
{/*                    </p>*/}
{/*                    <p>Производитель: <span>{item.manufactured}</span>*/}
{/*                    </p>*/}
{/*                    <p>Описание: <span>{item.description}</span>*/}
{/*                    </p>*/}
{/*                </div>*/}
{/*            </div>*/}
{/*            <div className="product-price">*/}
{/*                <h2>{item.price} тг.</h2>*/}
{/*                <div>*/}
{/*                    <p>в наличии</p>*/}
{/*                    <p>г. Астана</p>*/}
{/*                    <p>г. Алматы</p>*/}
{/*                </div>*/}
{/*                <div onClick={open}>*/}
{/*                    <Button text="Купить" buttonStyle={buttonStyles.normal}/>*/}
{/*                </div>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    )*/}
{/*})}*/}