import { useState, useEffect } from "react";

import products from '../products.json';

function Filter({ handleChangeEvent }) {
    const [productsList, setProducts] = useState(products.data.nodes);
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        const allCategories = [];

        productsList.forEach((product)=>{
            const categoryId = product.category._id;
            const categoryName = product.category.name; 
        
            allCategories[categoryId] = categoryName;
        });

        setCategories(allCategories);
    }

    useEffect(getCategories, []);

    const options = [];
    for(const category in categories) {
        options.push(<option key={ category } value={ categories[category] }>{ categories[category] }</option>);
    }

    return (
        <select name="categories" onChange={ handleChangeEvent }>
            <option value="Todas">Todas</option>
            { options }
        </select>
    );
}

export default Filter;