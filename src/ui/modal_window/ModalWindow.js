import Button, {buttonStyles} from "../button/Button";
import Modal from "../modal/Modal";
import {useEffect, useState} from "react";
import axios from "axios";

function ModalWindow({product, visible, close, props}) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1)
    }, [visible]);

    // console.log('---', prodID)

    function productAdd() {
        axios.get('https://frost.runtime.kz/api/cart/add?productId=', {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNzExN2VjOTUwZjExZGQ2NmVhMjUyYmQ2ODE2N2EzNjZjZDJiY2IyMDljODlkODQyN2RjMTcxYWQyYmNmMGI0YjdhODAyZDE0ODE3Zjc2ODUiLCJpYXQiOjE2OTc1NTQ1NjAuMzczNTU0LCJuYmYiOjE2OTc1NTQ1NjAuMzczNTU5LCJleHAiOjE3MjkxNzY5NjAuMzU3MzM2LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.MVN6fc65JCW8mwdPTG1h5CWPdr_L3OeXH-HlrpFVM35aqCkXp275Cmkr-wU8QRv5Oy1SpGZXH6DmyXNwxqEDX5R2LAhzuWe0GF8OMjiOwraNxQRqCQVQ4nfbieYnaZ8-aHH8PeGsKifn3nubxFgg6Y4RdAvA8gLmscGrxeOJJKntlmnsytYHWII9C0NiFnpfwolfAevDTD4vNruI9Zig-_CyyPTYdNzHbgxW5G3A1gpU-u8v44We4F6aTGPLdEjPKBeMiKFlWjDrQ9JctKrHNZDjL-jCekP7Lz5_UJBXbdm7qiQ0lNyBuxdroEUUM5CAmDk6mOwSn36-D-Ka9JoVSxJ3BsOnKOJhJVpxMX54_AE46h0x7wMrTSEWWtn6WbAawqzcmfB0DVTtUxJXiybUhUW6PFFPW_leZyZkvu2HOEhg1o1rAQUc_Mj1DzNwY5LwvljER9XBlIKhRK8aIhUJmqlVEgtwExhnBDi48s9ikdxQPjGE45YDvF-Pi4E4p4DvArO-Xxy6mdkkNR1cpPr_Lqkm5pi9eoNAL0FS2d9R9Efo7oRO3E4OGzjLI0fBvRXHdXLAvRmD2zuKP7FIZpVVVy2A15UgSCyBLDYifjMwzFbclkmbsjYx7cUHuaNYBh0Am8982LKhUgwSyDWfMwQPjgM_2ch2C0pHKjqSJZSdZL4'
            },
            params: {
                productId: props.prodID,
                count: count
            }
        })
            .then(()=>{
            })
    }

    return (
        <Modal visible={visible} close={close} product={product}>
            <h2>Добавить товар в корзину</h2>
            <div className="product-name">{product}</div>
            <div className="cart_counter">
                <span>Укажите количество</span>
                <div onClick={() => {
                    if (count !== 1) setCount(count - 1)}}>-
                </div>
                <div className="count">{count}</div>
                <div onClick={() => setCount(count + 1)}>+</div>
            </div>
            <Button text="Добавить в корзину" buttonStyle={buttonStyles.normal} onClick={productAdd}/>
            <p>Продолжить выбор товаров</p>
        </Modal>
    );
}

export default ModalWindow;
