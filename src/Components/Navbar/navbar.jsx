


// // import React, { useState } from 'react';
// // import './navbar.css';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
// // import logo from '../Assests/LogoPic.png';
// // import Login from '../loginup/Login';
// // import Register from '../loginup/Register';
// // import { FaHeart, FaShoppingCart } from 'react-icons/fa';

// // function Navbar({ cartItems = [], wishlistItems = [] }) {
// //   const [isLoginOpen, setIsLoginOpen] = useState(false);
// //   const [isRegisterOpen, setIsRegisterOpen] = useState(false);
// //   const [username, setUsername] = useState('');
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLoginClick = () => setIsLoginOpen(true);
// //   const handleRegisterClick = () => setIsRegisterOpen(true);
// //   const handleCloseLogin = () => setIsLoginOpen(false);
// //   const handleCloseRegister = () => setIsRegisterOpen(false);

// //   const handleLoginSuccess = (username) => {
// //     setUsername(username);
// //     setIsLoginOpen(false);
// //   };

// //   const openRegisterFromLogin = () => {
// //     setIsLoginOpen(false);
// //     setIsRegisterOpen(true);
// //   };

// //   const handleLogout = () => {
// //     setUsername('');
// //     navigate('/'); // Navigate to home page on logout
// //   };

// //   const DropdownMenu = () => (
// //     <div className="dropdown-menu">
// //       <div className="dropdown-item" onClick={() => navigate('/profile')}>Edit Profile</div>
// //       <div className="dropdown-item" onClick={handleLogout}>Logout</div>
// //     </div>
// //   );

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-left">
// //         <div className="logo">
// //           <Link to="/"><img src={logo} alt="Logo" className="logo-img" /></Link>
// //         </div>
// //       </div>
// //       <div className="navbar-center">
// //         <div className="search-container">
// //           <FontAwesomeIcon icon={faSearch} className="search-icon" />
// //           <input type="text" placeholder="Search..." className="search-box" />
// //         </div>
// //       </div>
// //       <div className="navbar-right">
// //         <Link to="/Aboutus" className="nav-link">ABOUT US</Link>
// //         <Link to="/Contact" className="nav-link">Track Order</Link>
// //         {username ? (
// //           <div 
// //             className="nav-link user-menu" 
// //             onMouseEnter={() => setIsDropdownOpen(true)}
// //             onMouseLeave={() => setIsDropdownOpen(false)}
// //           >
// //             Welcome, {username}
// //             {isDropdownOpen && <DropdownMenu />}
// //           </div>
// //         ) : (
// //           <div className="nav-link" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>Sign In & Sign Up</div>
// //         )}
// //         <Link to="/wishlist" className="nav-link">
// //           <FaHeart /> Wishlist ({wishlistItems.length})
// //         </Link>
// //         <Link to="/addtocart" className="nav-link">
// //           <FaShoppingCart /> Cart ({cartItems.length})
// //         </Link>
// //       </div>

// //       {/* Login Popup */}
// //       <Login isOpen={isLoginOpen} onClose={handleCloseLogin} onOpenRegister={openRegisterFromLogin} onLoginSuccess={handleLoginSuccess} />

// //       {/* Register Popup */}
// //       <Register isOpen={isRegisterOpen} onClose={handleCloseRegister} />
// //     </nav>
// //   );
// // }

// // export default Navbar;


// import React, { useState } from 'react';
// import './navbar.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
// import logo from '../Assests/LogoPic.png';
// import Login from '../loginup/Login';
// import Register from '../loginup/Register';
// import { FaHeart, FaShoppingCart } from 'react-icons/fa';

// function Navbar({ cartItems = [], wishlistItems = [] }) {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isRegisterOpen, setIsRegisterOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginClick = () => setIsLoginOpen(true);
//   const handleRegisterClick = () => setIsRegisterOpen(true);
//   const handleCloseLogin = () => setIsLoginOpen(false);
//   const handleCloseRegister = () => setIsRegisterOpen(false);

//   const handleLoginSuccess = (username) => {
//     setUsername(username);
//     setIsLoginOpen(false);
//   };

//   const openRegisterFromLogin = () => {
//     setIsLoginOpen(false);
//     setIsRegisterOpen(true);
//   };

//   const handleLogout = () => {
//     setUsername('');
//     navigate('/'); // Navigate to home page on logout
//   };

//   const DropdownMenu = () => (
//     <div className="dropdown-menu">
//       <div className="dropdown-item" onClick={() => navigate('/profile')}>Edit Profile</div>
//       <div className="dropdown-item" onClick={handleLogout}>Logout</div>
//     </div>
//   );

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="logo">
//           <Link to="/"><img src={logo} alt="Logo" className="logo-img" /></Link>
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
//         {username ? (
//           <div 
//             className="nav-link user-menu" 
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             Welcome, {username}
//             {isDropdownOpen && <DropdownMenu />}
//           </div>
//         ) : (
//           <div className="nav-link" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>Sign In & Sign Up</div>
//         )}
//         <Link to="/wishlist" className="nav-link">
//           <FaHeart /> Wishlist ({wishlistItems.length})
//         </Link>
//         <Link to="/addtocart" className="nav-link">
//           <FaShoppingCart /> Cart ({cartItems.length})
//         </Link>
//       </div>

//       {/* Login Popup */}
//       <Login isOpen={isLoginOpen} onClose={handleCloseLogin} onOpenRegister={openRegisterFromLogin} onLoginSuccess={handleLoginSuccess} />

//       {/* Register Popup */}
//       <Register isOpen={isRegisterOpen} onClose={handleCloseRegister} />
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assests/LogoPic.png';
import Login from '../loginup/Login';
import Register from '../loginup/Register';
import { FaHeart, FaPeopleArrows, FaShoppingCart, FaSign, FaSignLanguage } from 'react-icons/fa';

function Navbar({ cartCount }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleRegisterClick = () => setIsRegisterOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  const handleLoginSuccess = (username) => {
    setUsername(username);
    setIsLoginOpen(false);
  };

  const openRegisterFromLogin = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleLogout = () => {
    setUsername('');
    navigate('/'); // Navigate to home page on logout
  };
  

  const DropdownMenu = () => (
    <div className="dropdown-menu">
      <div className="dropdown-item" onClick={() => navigate('/profile')}>Edit Profile</div>
      <div className="dropdown-item" onClick={handleLogout}>Logout</div>
    </div>
  );

  return (
    <nav className="navbar" >
      <div className="navbar-left">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" className="logo-img" /></Link>
        </div>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-box" />
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/Aboutus" className="nav-link"><FaPeopleArrows></FaPeopleArrows>About Us</Link>
        <Link to="/review" className="nav-link">★Review Us</Link>
        {username ? (
          <div 
            className="nav-link user-menu" 
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            Welcome, {username}
            {isDropdownOpen && <DropdownMenu />}
          </div>
        ) : (
          <div className="nav-link" onClick={handleLoginClick} style={{ cursor: 'pointer' }}><FaSignLanguage></FaSignLanguage> SignIn & Sign Up</div>
        )}
    
        <Link to="/addtocart" className="nav-link">
          <FaShoppingCart /> Cart ({cartCount})
        </Link>
      </div>

      {/* Login Popup */}
      <Login isOpen={isLoginOpen} onClose={handleCloseLogin} onOpenRegister={openRegisterFromLogin} onLoginSuccess={handleLoginSuccess} />

      {/* Register Popup */}
      <Register isOpen={isRegisterOpen} onClose={handleCloseRegister} />
    </nav>
  );
}

export default Navbar;


