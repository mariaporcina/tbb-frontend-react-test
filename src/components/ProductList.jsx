import { useState } from "react";

import products from '../products.json';
import Filter from "./Filter";
import ProductCard from './ProductCard';

function ProductList() {
    const [productsList, setProducts] = useState(products.data.nodes);

    return (
        <div>
            <Filter />
            <ul>
                { productsList.map( item => {
                    return <ProductCard key={ item.id } product={ item } />;
                }) }
            </ul>
        </div>
    )
}

export default ProductList;