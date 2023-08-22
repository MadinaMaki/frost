import {Route, Routes} from "react-router-dom";
import CartHeader from "../cart_header/CartHeader";
import ContactDetails from "../../pages/contactDetails/ContactDetails";
import Delivery from "../../pages/delivery/Delivery";
import OrderComplete from "../../pages/orderComplere/OrderComplete";
import CartList from "../cartList/CartList";

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<CartHeader/>}>
                    <Route path='/cart' element={<CartList/>}/>
                    <Route path='/contacts' element={<ContactDetails/>}/>
                    <Route path='/delivery' element={<Delivery/>}/>
                    <Route path='/complete' element={<OrderComplete/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Router;
