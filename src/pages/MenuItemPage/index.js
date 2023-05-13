import { useParams } from "react-router-dom";
import menu from "../../fakeData/menu";

const MenuItemPage = () => {
    const { id } = useParams();
    let menuItem = menu.find((item) => item.id == id);
    console.log(menuItem);
    return (
        <>
            <div className="p-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-grey-200 bg-stone-50">
                    <img className="w-full" src={menuItem?.image} alt={menuItem.name}></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{menuItem.name}</div>
                        <p className="text-gray-700 text-base">
                            {menuItem.ingredients.join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuItemPage;