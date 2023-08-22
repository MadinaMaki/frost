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

    // function choosePhoto(index) {
    //     setMainPhoto(function (){
    //         setProductPhoto(function (prevPhotos){
    //
    //         });
    //     });
    // }

    // const [mainPhoto, setMainPhoto] = useState(mainPic);
    // const [otherPhotos, setOtherPhotos] = useState([pic1, pic2, pic3, pic4]);
    //
    // // Отобразить фото в главном блоке при нажатии на фото в других фото
    // function choosePhoto(clickedPhoto){
    //     setOtherPhotos([...otherPhotos, mainPhoto]);
    //     setMainPhoto(clickedPhoto);
    // }

    return (
        <div>
            <div className="product-main-img">
                <img src={mainPhoto} alt="product"/>
            </div>
            <div className="product-img">
                {productPhoto.map(function (photo, index){
                    return(
                        <div key={index}>
                            {/*<img onClick={() => choosePhoto(index)} src={photo}/>*/}
                            <img src={photo}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductPhoto;
