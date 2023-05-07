import Menucard from "./Menucard";

const Menu = ({ onItemBuy }) => {
    let items = [
        {
            "name": "Блины с повидлом",
            "ingredients": ["молоко", "яйца", "мука", "джем"],
            "priceSale": 300,
            "image": "/assets/jam_pancake.jpg"
        },
        {
            "name": "Блины с творогом",
            "ingredients": ["молоко", "яйца", "мука", "творог"],
            "priceSale": 450,
            "image": "/assets/cottageCheese_pancake.jpg"
        },
        {
            "name": "Блины с мясом",
            "ingredients": ["молоко", "яйца", "мука", "мясо"],
            "priceSale": 600,
            "image": "/assets/meat_pancake.jpg"
        },
        {
            "name": "Блины с лососем",
            "ingredients": ["молоко", "яйца", "мука", "лосось"],
            "priceSale": 800,
            "image": "/assets/salmon_pancake.jpg"
        },
        {
            "name": "Блины с бананом",
            "ingredients": ["молоко", "яйца", "мука", "банан"],
            "priceSale": 350,
            "image": "/assets/banana_pancake.jpg"
        },
        {
            "name": "Блины с шоколадом",
            "ingredients": ["молоко", "яйца", "мука", "горький шоколад"],
            "priceSale": 400,
            "image": "/assets/chocolate_pancake.jpg"
        }
    ];
    return (
        <div className="mx-auto grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container">
            {items.map((item) => (
                <Menucard item={item} onClickBuy={onItemBuy} />
            ))}
        </div>);
};

export default Menu;