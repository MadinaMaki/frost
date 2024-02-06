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
import axios from "axios";
import {loadCartItems, setIncrease} from "../../features/cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {getIncrease} from "../../features/cart/cartAPI";

function CartList() {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart);
    console.log(cartItems);

    let total = 0;
    for (let i of products) {
        total += i.count * i.product.price
    }

    useEffect(() => {
        dispatch(loadCartItems());
    }, []);

    return (
        <div className="container">
            {!products ?
                <div>Корзина пуста</div> :
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
                        {}
                        <div>
                            {cartItems.items.map((item, index) => {
                                return (
                                    <CartItem key={index} data={item}
                                              product_name={item.product.name} product_count={item.count}
                                              product_price={item.product.price} product_code={item.product.code}
                                              deleteItem={() => {
                                                  axios.get('https://frost.runtime.kz/api/cart/delete', {
                                                      params: {
                                                          productId: item.product.id,
                                                      }
                                                  })
                                                      .then(() => {
                                                          setProducts(() => {
                                                              let newProducts = [...products];
                                                              newProducts.splice(index, 1)
                                                              return newProducts;
                                                          })
                                                      })
                                              }}
                                              increase={() => {
                                                  getIncrease()
                                                      .then(() => {
                                                          setIncrease()
                                                      })
                                              }}
                                              decrease={() => {
                                                  axios.get('https://frost.runtime.kz/api/cart/decrease', {
                                                      params: {
                                                          productId: item.product.id,
                                                      }
                                                  })
                                                      .then(() => {
                                                          setProducts(() => {
                                                              let newProduct = [...products];
                                                              if (newProduct[index].count !== 1) {
                                                                  newProduct[index].count--;
                                                              }
                                                              return newProduct;
                                                          })
                                                      })
                                              }}
                                    />
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
            }
        </div>
    )
}

export default CartList;
