import { Link } from "react-router-dom";
import style from "./MenuCard.module.css";

const MenuCard = ({ item, onClickBuy = () => { } }) => {
    const ingredients = (
        <div>{item.ingredients.join(", ")}</div>
    );

    return (
        <div className="rounded overflow-hidden shadow-lg shadow-grey-200 bg-stone-50 pb-2" >
            <img src={item.image} className="object-cover h-60 w-full" alt={item.name} />
            <Link to={`/catalog/${item.id}`}>
                <div className="text-2xl p-2 font-bold text-orange-600 text-center">{item.name}</div>
            </Link>
            <div className="text-center">{ingredients}</div>
            <div className={"p-2 " + style.row}>
                <div className={"p-2 text-center rounded-full " + style.card}>{item.priceSale} рублей</div>
            </div>
            <div className="grid grid-cols-1 gap-4 content-center px-2">
                <button onClick={() => onClickBuy(item)} className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-4 py-2 rounded">
                    Добавить в карзину
                </button>
            </div>

        </div>
    );
};

export default MenuCard;