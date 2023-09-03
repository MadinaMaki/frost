import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CartList from "./components/cartList/CartList";
import Delivery from "./pages/delivery/Delivery";
import Account from "./pages/account/Account";
import App from "./App"
import OrderComplete from "./pages/orderComplere/OrderComplete";
import ProductList from "./components/product_list/ProductList";
import ProductItem from "./components/product_item/ProductItem";
import ContactDetails from "./pages/contactDetails/ContactDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <ProductList/>
            },
            {
                path: "/cart",
                element: <CartList/>,
            },
            {
                path: "/delivery",
                element: <Delivery/>
            },
            {
                path: "/account",
                element: <Account/>
            },
            {
                path: "/contact",
                element: <ContactDetails/>
            },
            {
                path: "order_complete",
                element: <OrderComplete/>
            },
            {
                path: "/info/:product_id",
                element: <ProductItem/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
