import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>$ {product.price}</p>
      <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
    </div>
  )
};

export default Product;
