import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assests/LogoPic.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-box" />
        </div>
      </div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faLocation} />
        <Link to="/Contact" className="nav-link">Track Order</Link>
        <Link to="/" className="nav-link">Sign In</Link>
        <Link to="/register" className="nav-link">Sign Up</Link>
        <Link to="/wishlist" className="nav-link">
          <FontAwesomeIcon icon={faHeart} className="nav-icon" />
          <span className="nav-text" style={{color:'black'}}>Wishlist</span>
        </Link>
        <Link to="/cart" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
          <span className="nav-text" style={{color:'black'}}>Add to Cart</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
