function ProductCard({ product }) {
    return (
        <li>
            <img src={ product.images[0].asset.url } alt={ product.images[0].alt } />
            <h2>{ product.name }</h2>
            <h3>{ product.category.name }</h3>
            <p>{ product.shortDescription }</p>
        </li>
    );
}

export default ProductCard;