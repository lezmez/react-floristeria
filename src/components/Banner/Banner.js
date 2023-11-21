import React from 'react';
import "./Banner.css";
import fondo from '../images/fondo.jpg';

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-container'>
            <h1>Flower shop</h1>
            <p1>Embrace your beauty with our flowers!</p1>
            <p2>Discover the freshness they add to every moment...🌸✨</p2>
            <p3>Catalog</p3>
            <img src={fondo} alt=" " className="miFondoBanner"/>
        </div>
    </div>
  )
}

export default Banner;
