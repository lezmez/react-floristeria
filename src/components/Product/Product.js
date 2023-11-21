import React from 'react';
import './Product.css';

const Product = ({ image, description, price, addToCart }) => {
  return (
    <div className="product">
      <img src={require(`../images/${image}`).default} alt="Product" />
      <h3>{description}</h3>
      <p>{`Price: $${price}`}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;