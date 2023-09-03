import mainPic from "../productCard/assets/main-picture.png";
import pic1 from "../productCard/assets/5003-01 (1).png";
import pic2 from "../productCard/assets/5003-02 (1).png";
import pic3 from "../productCard/assets/5003-03 (1).png";
import pic4 from "../productCard/assets/5003-04 (1).png";
import './ProductPhoto.css';
import {useState} from "react";

function ProductPhoto() {
    const [productPhoto, setProductPhoto] = useState([pic1, pic2, pic3, pic4]);

    const [mainPhoto, setMainPhoto] = useState(mainPic);

    function clickPhoto(index) {
        setMainPhoto(function (){
            setProductPhoto( (prevPhoto) => {
                let newPhoto;
                newPhoto = prevPhoto[index];
                return newPhoto;
            });
        });
    }

    return (
        <div>
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
        </div>
    )
}

export default ProductPhoto;
