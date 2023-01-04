import { useState, useEffect } from "react";

import getCategories from "../helpers/categoriesHelper";

function Filter({ productsList, handleChangeEvent }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const allCategories = getCategories(productsList);
        setCategories(allCategories);
    }, []);

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