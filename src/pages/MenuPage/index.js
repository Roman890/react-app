import MenuCard from "../../components/MenuCard";
import menu from "../../fakeData/menu";

const Menu = ({ onItemBuy }) => {
    return (
        <div className={"mx-auto my-6 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container"}>
            {menu.map((item) => (
                <MenuCard item={item} onClickBuy={onItemBuy} key={item.id} />
            ))}
        </div>
    );
};

export default Menu;