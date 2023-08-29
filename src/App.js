import './App.css';
import ProductList from './components/product_list/ProductList';
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import CartList from "./components/cartList/CartList";
import CartItem from "./components/cart_item/CartItem";
import ContactDetails from "./pages/contactDetails/ContactDetails";
import Delivery from "./pages/delivery/Delivery";
import OrderComplete from "./pages/orderComplere/OrderComplete";
import Account from "./pages/account/Account";
import ProductCard from "./components/productCard/ProductCard";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import CartHeader from "./components/cart_header/CartHeader";
import Navigate from "./ui/navigate/Navigate";
import Home from "./pages/home/Home";

function App() {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;
