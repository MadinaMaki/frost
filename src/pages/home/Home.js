import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import ProductList from "../../components/product_list/ProductList";
import Footer from "../../components/footer/Footer";
import CartList from "../../components/cartList/CartList";
import Delivery from "../delivery/Delivery";
import Comment from "../../components/comment/Comment";
import Account from "../account/Account";
import ContactDetails from "../contactDetails/ContactDetails";
import ProductCard from "../../components/productCard/ProductCard";
import Modal from "../../ui/modal/Modal";

function Home() {
    return (
        <div>
            <Header/>
            {/*<ProductList/>*/}
            {/*<CartList/>*/}
            <ProductCard/>
            {/*<Account/>*/}
            {/*<ContactDetails/>*/}
            {/*<Delivery/>*/}
            <Footer/>
        </div>
    )
}

export default Home;