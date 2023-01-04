import { useState, useEffect } from "react";

import './styles/index.scss';
import './styles/App.scss';

import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

import products from './products.json';

function App() {
  const [productsList, setProducts] = useState(products.data.nodes);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = (event) => {
      const selectedcategory = event.target.selectedOptions[0].value;
      const filteredProducts = productsList.filter(product => product.category.name === selectedcategory);

      setFilteredProducts(filteredProducts);
  }

  return (
    <div className="App">
      <header className="AppHeader">
        <div className="container">
          <h1>Higiene Pessoal</h1>
          <Filter productsList={ productsList } handleChangeEvent={ filterProducts } />
        </div>
      </header>
      <main>
        <div className="container">
          <ProductList productsList={ productsList } filteredProducts={ filteredProducts } />
        </div>
      </main>
      <footer className="AppFooter">
        <p>Copyright &copy; 2022</p>
      </footer>
    </div>
  );
}

export default App;
