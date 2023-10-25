import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
// import Test from "./components/Test";
// import Test from "./components/Test";

function App() {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
            {/*<Test/>*/}
        </div>
    );
}

export default App;
