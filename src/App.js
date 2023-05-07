import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {

    const [cart, setCart] = useState([])

    const addToCard = item => {
        setCart([...cart, item])
    }


    return (
        <div className="App ">
            <div className="mx-auto my-5 container flex flex-row-reverse text-right">
                <div>
                    <div className="p-2 container">
                        <div className="text-xl font-bold">Корзина</div>
                        <div>Количество {cart.length} </div>
                        <div>Сумма {cart.reduce((sum, item) => (sum += item.priceSale), 0)} </div>
                    </div>
                </div>
            </div>
            <Menu onItemBuy={(item) => addToCard(item)}> </Menu>
        </div >
    );
} 



export default App;
