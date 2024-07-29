import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch,faLocation,faPhone} from '@fortawesome/free-solid-svg-icons';
import logo from '../Assests/Logo.png';
import Login from '../loginup/Login';




function Navbar() {
  return (
    
    <nav className="navbar" style={{backgroundColor:'white', position:'fixed'}}>
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" /> 
        </div>
        <div><FontAwesomeIcon icon={faPhone}/></div><a href=" tel:+7598894445"> Contact: +123-456-7890</a> 
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-box" />
        </div>
      </div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
        <a href="#trackorder" className="nav-link"><Link to="/Product">Track Order</Link></a>
        <a href="#signin" className="nav-link"><Link to="/">Sign In</Link></a>
        <a href="#signup" className="nav-link"><Link to="/register">Sign Up</Link></a>
        <a href="#wishlist" className="nav-link">
          <FontAwesomeIcon icon={faHeart} className="nav-icon" />
          <span className="nav-text">Wishlist</span>
        </a>
        <a href="#cart" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
          <span className="nav-text">Add to Cart</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;



