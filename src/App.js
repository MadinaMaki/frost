import './App.css';
import Home from "./pages/home/Home";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {checkTokenAndGetUser} from "./features/auth/authSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkTokenAndGetUser())
    }, [dispatch])

    return (
        <div className="App">
           <Home/>
        </div>
    );
}

export default App;
