import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CartList from "./components/cartList/CartList";
import Delivery from "./pages/delivery/Delivery";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/cart",
        element: <CartList/>,
    },
    {
        path: "/delivery",
        element: <Delivery/>
    },
    {
        path: "/",
        element: <Home/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
