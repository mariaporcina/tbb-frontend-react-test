import { useState } from "react";

import products from '../products.json';
import Filter from "./Filter";
import ProductCard from './ProductCard';

function ProductList() {
    const [productsList, setProducts] = useState(products.data.nodes);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterProducts = (event) => {
        const selectedcategory = event.target.selectedOptions[0].value;
        const filteredProducts = productsList.filter(product => product.category.name === selectedcategory);

        setFilteredProducts(filteredProducts);
    }

    if(filteredProducts.length > 0) {
        return (
            <div>
                <Filter handleChangeEvent={ filterProducts } />
                <ul>
                    { filteredProducts.map( item => {
                        return <ProductCard key={ item.id } product={ item } />;
                    }) }
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <Filter handleChangeEvent={ filterProducts } />
                <ul>
                    { productsList.map( item => {
                        return <ProductCard key={ item.id } product={ item } />;
                    }) }
                </ul>
            </div>
        )
    }
}

export default ProductList;