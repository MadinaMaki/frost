import './App.css';
import Home from "./pages/home/Home";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkTokenAndGetUser} from "./features/auth/authSlice";

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
                <Home/>
            </div>
        );
    // }
}

export default App;
