import { Link } from "react-router-dom";

const MainMenu = () => {
    let menuItems = [
        { title: "Главная", link: "/" },
        { title: "О нас", link: "/about" },
    ];
    return (
        <div className="flex gap-6 my-6 text-xl font-bold">
            {menuItems.map((item) => (
                <Link to={item.link}>{item.title}</Link>
            ))}
        </div>
    );
};

export default MainMenu;