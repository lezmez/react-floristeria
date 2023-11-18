import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
            <h1 className='navbar-logo'>Shop.</h1>
            <h2 className='seeCarrito'>🛒</h2>
        </nav>
    </div>
  )
}

export default Navbar