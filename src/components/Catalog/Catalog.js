import React, { useState } from 'react';
import Product from '../Product/Product';
import './Catalog.css';

const Catalog = () => {
  const [products] = useState([
    { id: 1, name: 'Red Rose', category: 'roses', price: 19.999, image: 'rosaroja.jpg' },
    { id: 2, name: 'Red White', category: 'roses', price: 19.999, image: 'rosablanca.jpg' },
    { id: 3, name: 'Sunflower', category: 'sunflowers', price: 15.999, image: 'girasol.jpg' },
    { id: 4, name: 'Tulip', category: 'tulips', price: 26.999, image: 'tulipan.jpg' },
    { id: 5, name: 'Orchid', category: 'orchids', price: 39.999, image: 'orquidea.jpg' },
    { id: 6, name: 'Lily', category: 'lilies', price: 30.999, image: 'lirio.jpg' },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (category) => {
    if (category === 'todos') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <h2>Catalog</h2>
      <div className="filter-buttons">
        <button onClick={() => handleFilter('todos')}>All</button>
        <button onClick={() => handleFilter('roses')}>Roses</button>
        <button onClick={() => handleFilter('sunflowers')}>Sunflowers</button>
        <button onClick={() => handleFilter('tulips')}>Tulips</button>
        <button onClick={() => handleFilter('orchids')}>Orchids</button>
        <button onClick={() => handleFilter('lilies')}>Lilies</button>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;