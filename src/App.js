import "./App.css";
//import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "./components/MainMenu";

function App() {
    //const [cart, setCart] = useState([]);

    //const addToCart = (item) => {
    //    setCart([...cart, item]);
    //};

    return (
        <div>
            <div className="container mx-auto">
                <MainMenu />
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default App;
