const Image = ({ image, name, price, ingredients }) => {
    return (
        <>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h3>Стоимость: {price} рублей</h3>
            <p>Ингредиенты: {ingredients}</p>
        </>
    );
};

export default Image;