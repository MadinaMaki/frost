import './CartList.css';
import CartHeader from "../cart_header/CartHeader";
import './CartList.css'
import Button, {buttonStyles} from "../../ui/button/Button";
import CartItem from "../cart_item/CartItem";
import DropDown from "../../ui/drop_down/DropDown";
import Navigate from "../../ui/navigate/Navigate";
// import { Outlet } from "react-router-dom";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";
import axios from "axios";

function CartList() {
    const [products, setProducts] = useState([]);

    let total = 0;
    for (let i of products) {
        total += i.count * i.product.price
    }

    useEffect(() => {
        axios.get('https://frost.runtime.kz/api/cart', {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNzExN2VjOTUwZjExZGQ2NmVhMjUyYmQ2ODE2N2EzNjZjZDJiY2IyMDljODlkODQyN2RjMTcxYWQyYmNmMGI0YjdhODAyZDE0ODE3Zjc2ODUiLCJpYXQiOjE2OTc1NTQ1NjAuMzczNTU0LCJuYmYiOjE2OTc1NTQ1NjAuMzczNTU5LCJleHAiOjE3MjkxNzY5NjAuMzU3MzM2LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.MVN6fc65JCW8mwdPTG1h5CWPdr_L3OeXH-HlrpFVM35aqCkXp275Cmkr-wU8QRv5Oy1SpGZXH6DmyXNwxqEDX5R2LAhzuWe0GF8OMjiOwraNxQRqCQVQ4nfbieYnaZ8-aHH8PeGsKifn3nubxFgg6Y4RdAvA8gLmscGrxeOJJKntlmnsytYHWII9C0NiFnpfwolfAevDTD4vNruI9Zig-_CyyPTYdNzHbgxW5G3A1gpU-u8v44We4F6aTGPLdEjPKBeMiKFlWjDrQ9JctKrHNZDjL-jCekP7Lz5_UJBXbdm7qiQ0lNyBuxdroEUUM5CAmDk6mOwSn36-D-Ka9JoVSxJ3BsOnKOJhJVpxMX54_AE46h0x7wMrTSEWWtn6WbAawqzcmfB0DVTtUxJXiybUhUW6PFFPW_leZyZkvu2HOEhg1o1rAQUc_Mj1DzNwY5LwvljER9XBlIKhRK8aIhUJmqlVEgtwExhnBDi48s9ikdxQPjGE45YDvF-Pi4E4p4DvArO-Xxy6mdkkNR1cpPr_Lqkm5pi9eoNAL0FS2d9R9Efo7oRO3E4OGzjLI0fBvRXHdXLAvRmD2zuKP7FIZpVVVy2A15UgSCyBLDYifjMwzFbclkmbsjYx7cUHuaNYBh0Am8982LKhUgwSyDWfMwQPjgM_2ch2C0pHKjqSJZSdZL4'
            },
        })
            .then((response) => {
                let data = response.data;
                setProducts(data.items);
                console.log(data.items)
            })
    }, [])

    return (
        <div className="container">
            <div>
                <div className="cart-header">
                    <CartHeader titleText="Оформление заказа"/>
                    <Navigate/>
                </div>
                <div className="main">
                    <div className="title">Корзина</div>
                    <div className="table-head">
                        <div>Наименование товара</div>
                        <div className="table-right">
                            <div>Количество</div>
                            <div>Цена</div>
                        </div>
                    </div>
                    <div>
                        {products.map((item, index) => {
                            return (
                                <CartItem key={index} data={item}
                                          product_name={item.product.name} product_count={item.count}
                                          product_price={item.product.price} product_code={item.product.code}
                                          deleteItem={() => {
                                              axios.get('https://frost.runtime.kz/api/cart/delete', {
                                                  headers: {
                                                      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNzExN2VjOTUwZjExZGQ2NmVhMjUyYmQ2ODE2N2EzNjZjZDJiY2IyMDljODlkODQyN2RjMTcxYWQyYmNmMGI0YjdhODAyZDE0ODE3Zjc2ODUiLCJpYXQiOjE2OTc1NTQ1NjAuMzczNTU0LCJuYmYiOjE2OTc1NTQ1NjAuMzczNTU5LCJleHAiOjE3MjkxNzY5NjAuMzU3MzM2LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.MVN6fc65JCW8mwdPTG1h5CWPdr_L3OeXH-HlrpFVM35aqCkXp275Cmkr-wU8QRv5Oy1SpGZXH6DmyXNwxqEDX5R2LAhzuWe0GF8OMjiOwraNxQRqCQVQ4nfbieYnaZ8-aHH8PeGsKifn3nubxFgg6Y4RdAvA8gLmscGrxeOJJKntlmnsytYHWII9C0NiFnpfwolfAevDTD4vNruI9Zig-_CyyPTYdNzHbgxW5G3A1gpU-u8v44We4F6aTGPLdEjPKBeMiKFlWjDrQ9JctKrHNZDjL-jCekP7Lz5_UJBXbdm7qiQ0lNyBuxdroEUUM5CAmDk6mOwSn36-D-Ka9JoVSxJ3BsOnKOJhJVpxMX54_AE46h0x7wMrTSEWWtn6WbAawqzcmfB0DVTtUxJXiybUhUW6PFFPW_leZyZkvu2HOEhg1o1rAQUc_Mj1DzNwY5LwvljER9XBlIKhRK8aIhUJmqlVEgtwExhnBDi48s9ikdxQPjGE45YDvF-Pi4E4p4DvArO-Xxy6mdkkNR1cpPr_Lqkm5pi9eoNAL0FS2d9R9Efo7oRO3E4OGzjLI0fBvRXHdXLAvRmD2zuKP7FIZpVVVy2A15UgSCyBLDYifjMwzFbclkmbsjYx7cUHuaNYBh0Am8982LKhUgwSyDWfMwQPjgM_2ch2C0pHKjqSJZSdZL4',
                                                  },
                                                  params: {
                                                      productId: 2,
                                                  }
                                              })
                                                  .then(() => {
                                                      console.log('deleted');
                                                      setProducts(() => {
                                                          let newProducts = [...products];
                                                          newProducts.splice(item.product.id, 1)
                                                          return newProducts;
                                                      })
                                                  })
                                          }}
                                          increase={() => {
                                              setProducts(() => {

                                              })
                                          }}
                                          decrease={() => {

                                          }}/>

                                // <CartItem key={index} data={item}
                                //           onPlus={() => {
                                //                   setProducts(() => {
                                //                       let newProduct = [...products];
                                //                       newProduct[index].count++;
                                //                       return newProduct;
                                //                   })
                                //           }}
                                //           onMinus={() => {
                                //                   setProducts(() => {
                                //                       let newProduct = [...products];
                                //                       if(newProduct[index].count !== 1) {
                                //                           newProduct[index].count--;
                                //                       }
                                //                       return newProduct;
                                //                   })
                                //           }}
                                //           deleteItem={() => {
                                //               setProducts(() => {
                                //                   console.log(item)
                                //                   let newProducts = [...products];
                                //                   newProducts.splice(index, 1)
                                //                   return newProducts;
                                //               });
                                //           }}
                                // />
                            );
                        })}
                    </div>
                    <hr/>
                    <div className="payment-info">
                        <div>
                            <p style={{color: '#646464', fontWeight: '600'}}>Способ оплаты</p>
                            <DropDown data={[
                                {text: 'Выбрать способ оплаты', value: 1},
                                {text: 'банковская карта', value: 2},
                                {text: 'E-wallet', value: 3},
                                {text: 'Apple-Pay', value: 4}
                            ]}/>
                        </div>
                        <h2>Итого к оплате:</h2>
                        <h2>{total} тг.</h2>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/contact">
                        <Button text="Оформить заказ" buttonStyle={buttonStyles.normal}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartList;
