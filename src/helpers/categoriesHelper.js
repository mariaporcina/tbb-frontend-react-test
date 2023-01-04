const getCategories = (productsList) => {
    const allCategories = [];

    productsList.forEach((product)=>{
        const categoryId = product.category._id;
        const categoryName = product.category.name; 
    
        allCategories[categoryId] = categoryName;
    });

    return allCategories;
}

export default getCategories;