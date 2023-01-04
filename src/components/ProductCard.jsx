import '../styles/ProductCard.scss';

function ProductCard({ product }) {
    const formatName = () => {
        const newName = product.name.slice(0, 35) + '...';
        return newName;
    }

    const formatDescription = () => {
        const newDescription = product.shortDescription.slice(0, 40) + '...';
        return newDescription;
    }

    return (
        <li className="ProductList__card">
            <img src={ product.images[0].asset.url } alt={ product.images[0].alt } />
            <h2>{ formatName() }</h2>
            <h3>{ product.category.name }</h3>
            <p>{ formatDescription() }</p>
        </li>
    );
}

export default ProductCard;