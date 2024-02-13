import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {checkTokenAndGetUser} from "./features/auth/authSlice";
import {useSelector} from "react-redux";
import Header from "./components/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkTokenAndGetUser())
    }, [dispatch])

    const auth = useSelector(state => state.auth);
    // if (!auth.user) {
    //     return (
    //         <div>User is not authorized</div>
    //     );
    // } else {
        return (
            <div className="App">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        );
    // }
}

export default App;
