import ProductCard from './ProductCard';

import '../styles/ProductList.scss'

function ProductList({ productsList, filteredProducts }) {
    if(filteredProducts.length > 0) {
        return (
            <div>
                <ul className="ProductList">
                    { filteredProducts.map( item => {
                        return <ProductCard key={ item.id } product={ item } />;
                    }) }
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <ul className="ProductList">
                    { productsList.map( item => {
                        return <ProductCard key={ item.id } product={ item } />;
                    }) }
                </ul>
            </div>
        )
    }
}

export default ProductList;