import React from 'react';
import Product from '../Product/Product';

const Catalog = () => {
  const products = [
    {
        id: 1,
        image: 'rosaroja.jpg',
        description: 'Red Rose',
        price: 15.999,
    },
    {
        id: 2,
        image: 'rosablanca.jpg',
        description: 'White Rose',
        price: 15.999,
    },
    {
        id: 3,
        image: 'girasol.jpg',
        description: 'Sunflower',
        price: 17.999,
    },
    {
        id: 4,
        image: 'tulipan.jpg',
        description: 'Tulip',
        price: 20.999,
    },
    {
        id: 5,
        image: 'lirio.jpg',
        description: 'Lily',
        price: 18.999,
    },
    {
        id: 6,
        image: 'orquidea.jpg',
        description: 'Orchid',
        price: 30.999,
    },
  ];

  const addToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="catalog">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          description={product.description}
          price={product.price}
          addToCart={() => addToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default Catalog;