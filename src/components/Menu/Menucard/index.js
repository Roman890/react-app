import style from "./Menucard.module.css";
const Menucard = ({ item, onClickBuy = () => { } }) => {
    const ingrigients = (
        <div className="">{item.ingredients.join(", ")}</div>
    );
    return (
        <div className="rounded overflow-hidden shadow-lg shadow-grey-200 bg-stone-50">
            <img className="object-cover h-60 w-full" src={item.image} alt={item.name} />
            <div className="text-2xl p-2 font-bold text-orange-600">{item.name}</div>
            <div >{ingrigients}</div>
            <div className={"p-2 " + style.row}>
                <div className={"p-2 text-center rounded-full " + style.card}>{item.priceSale} рублей</div>
            </div>
            <button onClick={() => onClickBuy(item)} class="bg-orange-400 hover:bg-orange-500 text-white font-bold p-4 rounded m-4">Добавить в корзину</button>
        </div>
    );
};

export default Menucard;