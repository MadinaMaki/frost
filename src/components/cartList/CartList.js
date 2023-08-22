import './CartList.css';
import CartHeader from "../cart_header/CartHeader";
import './CartList.css'
import Button, {buttonStyles} from "../../ui/button/Button";
import CartItem from "../cart_item/CartItem";
import DropDown from "../../ui/drop_down/DropDown";
import Navigate from "../../ui/navigate/Navigate";
// import { Outlet } from "react-router-dom";
import {useState} from "react";

function CartList() {
    const [products, setProducts] = useState([
        { name: 'Компрессор кондиционера Hyundai Tucson', price: 110999, count: 1 },
        { name: 'Компрессор кондиционера Kia Sportage', price: 99990, count: 1 }
    ]);

    let total = 0;
    for (let i of products) {
        total += i.count * i.price
    }

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
                                          onPlus={() => {
                                                  setProducts(() => {
                                                      let newProduct = [...products];
                                                      newProduct[index].count++;
                                                      return newProduct;
                                                  })
                                          }}
                                          onMinus={() => {
                                                  setProducts(() => {
                                                      let newProduct = [...products];
                                                      if(newProduct[index].count !== 1) {
                                                          newProduct[index].count--;
                                                      }
                                                      return newProduct;
                                                  })
                                          }}
                                          // deleteItem={() => {
                                          //     setProducts(() => {
                                          //         let newProducts = [...products];
                                          //         newProducts[index].item.splice(index, 1)
                                          //         return newProducts;
                                          //     })
                                          // }}
                                />
                            )
                        })}
                    </div>
                    <hr/>
                    <div className="payment-info">
                        <div>
                            <p style={{color: '#646464', fontWeight: '600'}}>Способ оплаты</p>
                            <DropDown data={[
                                { text: 'Выбрать способ оплаты', value: 1},
                                { text: 'банковская карта', value: 2 },
                                { text: 'E-wallet', value: 3 },
                                { text: 'Apple-Pay', value: 4 }
                            ]}/>
                        </div>
                        <h2>Итого к оплате:</h2>
                        <h2>{total} тг.</h2>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button text="Оформить заказ" buttonStyle={buttonStyles.normal}/>
                </div>
            </div>
            {/*<Outlet/>*/}
        </div>
    )
}

export default CartList;
