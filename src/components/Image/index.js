const Image = ({ name, price, ingredients }) => {
    return (
        <>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p>{ingredients}</p>
        </>
    );
};

export default Image;