import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assests/LogoPic.png';
import Login from '../loginup/Login';
import Register from '../loginup/Register';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartItems = [], wishlistItems = [] }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleRegisterClick = () => setIsRegisterOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  return (
    <nav className="navbar" style={{ position: 'fixed' }}>
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
        <Link to="/Aboutus" className="nav-link">ABOUT US</Link>
        <Link to="/Contact" className="nav-link">Track Order</Link>
        <button className="nav-link" onClick={handleLoginClick}>Sign In</button>
        <button className="nav-link" onClick={handleRegisterClick}>Sign Up</button>
        <Link to="/wishlist" className="nav-link">
          <FaHeart /> Wishlist ({wishlistItems.length})
        </Link>
        <Link to="/addtocart" className="nav-link">
          <FaShoppingCart /> Cart ({cartItems.length})
          </Link>
      </div>

      {/* Login Popup */}
      <Login isOpen={isLoginOpen} onClose={handleCloseLogin} />

      {/* Register Popup */}
      <Register isOpen={isRegisterOpen} onClose={handleCloseRegister} />
    </nav>
  );
}

export default Navbar;
