// import React, { useState } from 'react';
// import './navbar.css';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
// import logo from '../Assests/LogoPic.png';
// import Login from '../loginup/Login';


// function Navbar() {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);

//   const handleLoginClick = () => {
//     setIsLoginOpen(true);
//   };

//   const handleCloseLogin = () => {
//     setIsLoginOpen(false);
//   };

//   return (
//     <nav className="navbar" style={{ position: 'fixed' }}>
//       <div className="navbar-left">
//         <div className="logo">
//           <img src={logo} alt="Logo" className="logo-img" />
//         </div>
//       </div>
//       <div className="navbar-center">
//         <div className="search-container">
//           <FontAwesomeIcon icon={faSearch} className="search-icon" />
//           <input type="text" placeholder="Search..." className="search-box" />
//         </div>
//       </div>
//       <div className="navbar-right">
//         <Link to="/Aboutus" className="nav-link">ABOUT US</Link>
//         <Link to="/Contact" className="nav-link">Track Order</Link>
//         <button className="nav-link" onClick={handleLoginClick}>Sign In</button>
//         <Link to="/register" className="nav-link">Sign Up</Link>
//         <Link to="/wishlist" className="nav-link">
//           <FontAwesomeIcon icon={faHeart} className="nav-icon" />
//           <span className="nav-text" style={{ color: 'black' }}>Wishlist</span>
//         </Link>
//         <Link to="/cart" className="nav-link">
//           <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
//           <span className="nav-text" style={{ color: 'black' }}>Add to Cart</span>
//         </Link>
//       </div>

//       {/* Login Popup */}
//       <Login isOpen={isLoginOpen} onClose={handleCloseLogin} />
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assests/LogoPic.png';
import Login from '../loginup/Login';
import Register from '../loginup/Register';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

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
          <FontAwesomeIcon icon={faHeart} className="nav-icon" />
          <span className="nav-text" style={{ color: 'black' }}>Wishlist</span>
        </Link>
        <Link to="/cart" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
          <span className="nav-text" style={{ color: 'black' }}>Add to Cart</span>
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
