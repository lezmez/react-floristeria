import React from 'react';
import './Product.css';
import { rosaroja, rosablanca, girasol, lirio, orquidea, tulipan } from '../images/images.js';

const Product = ({ product }) => {
  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  /*const imagesMap = {
    rosaroja,
    rosablanca,
    girasol,
    lirio,
    orquidea,
    tulipan,
  };*/

  return (
    <div className="product">
      <img src={girasol} alt={product.name} />
      <p>{product.name}</p>
      <p>$ {product.price}</p>
      <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
    </div>
  )
};

export default Product;
