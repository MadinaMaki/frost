import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CartList from "./components/cartList/CartList";
import Delivery from "./pages/delivery/Delivery";
import OrdersInfo from "./pages/account/OrdersInfo";
import App from "./App"
import OrderComplete from "./pages/orderComplere/OrderComplete";
import ProductList from "./components/product_list/ProductList";
import ProductItem from "./components/product_item/ProductItem";
import ContactDetails from "./pages/contactDetails/ContactDetails";
import ProductCard from "./components/productCard/ProductCard";
import AuthContextProvider, {AuthContext} from "./context/AuthContext";
import UserContactInfo from "./pages/account/UserContactInfo";
import Address from "./pages/account/Address";

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
                element: <OrdersInfo/>
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
                element: <ProductCard/>
            },
            {
                path: "/contact_details",
                element: <UserContactInfo/>
            },
            {
                path: "/order_history",
                element: <OrdersInfo/>
            },
            {
                path: "/address",
                element: <Address/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <RouterProvider router={router}/>
    </AuthContextProvider>
);
