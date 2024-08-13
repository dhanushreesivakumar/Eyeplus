// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import OurLogo from '../Assests/LogoPic.png';
// import { FaFacebook, FaGoogle } from 'react-icons/fa';

// function Login({ isOpen, onClose }) {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState('');  // State for success or error messages
//   const [isSuccess, setIsSuccess] = useState(false);  // State to check if login is successful

//   if (!isOpen) return null;

//   const validate = () => {
//     const errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!emailRegex.test(email)) {
//       errors.email = 'Invalid email format';
//     }
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }
//     return errors;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:9001/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid credentials');
//       }

//       setIsSuccess(true);
//       setMessage('Login successful');
//       setTimeout(() => {
//         navigate('/');  // Redirect to home page after login
//         onClose();  // Close the popup after login attempt
//       }, 2000);  // Close after 2 seconds
//     } catch (error) {
//       setIsSuccess(false);
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-popup">
//       <div className="login-popup-content">
//         <button className="close-button" onClick={onClose} style={{width:'10px', color:'black', marginRight:'20px', backgroundColor:'white' }}>×</button>
//         <img src={OurLogo} alt="Logo" style={{ marginLeft: '130px', width:'100px'}} />
//         <h4 className='different' style={{ backgroundColor: "#fff", marginLeft: '130px' }}>Sign In</h4>
        
//         {message && (
//           <div className={`message ${isSuccess ? 'success' : 'error'}`}>
//             {isSuccess ? '✔️' : '❌'} {message}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <div className="error">{errors.email}</div>}

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && <div className="error">{errors.password}</div>}

//           <button type="submit" style={{ backgroundColor: "#0056b3" }}>Login</button>
//         </form>
        
//         <div className="social-login">
//           <button className="google-login" style={{background:'lightred'}}><FaGoogle></FaGoogle>      Login with Google</button>
//           <button className="facebook-login"><FaFacebook></FaFacebook> Login with Facebook</button>
//         </div>
        
//         <div className="signup-link">
//           Don't have an account? <Link to="/register">Sign Up</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import OurLogo from '../Assests/LogoPic.png';
// import { FaFacebook, FaGoogle } from 'react-icons/fa';

// function Login({ isOpen, onClose, onOpenRegister }) {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState('');  // State for success or error messages
//   const [isSuccess, setIsSuccess] = useState(false);  // State to check if login is successful

//   if (!isOpen) return null;

//   const validate = () => {
//     const errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!emailRegex.test(email)) {
//       errors.email = 'Invalid email format';
//     }
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }
//     return errors;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:9001/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid credentials');
//       }

//       setIsSuccess(true);
//       setMessage('Login successful');
//       setTimeout(() => {
//         navigate('/');  // Redirect to home page after login
//         onClose();  // Close the popup after login attempt
//       }, 2000);  // Close after 2 seconds
//     } catch (error) {
//       setIsSuccess(false);
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-popup">
//       <div className="login-popup-content">
//         <button className="close-button" onClick={onClose} style={{width:'10px', color:'black', marginRight:'20px', backgroundColor:'white' }}>×</button>
//         <img src={OurLogo} alt="Logo" style={{ marginLeft: '130px', width:'100px'}} />
//         <h4 className='different' style={{ backgroundColor: "#fff", marginLeft: '130px' }}>Sign In</h4>
        
//         {message && (
//           <div className={`message ${isSuccess ? 'success' : 'error'}`}>
//             {isSuccess ? '✔️' : '❌'} {message}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <div className="error">{errors.email}</div>}

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && <div className="error">{errors.password}</div>}

//           <button type="submit" style={{ backgroundColor: "#0056b3" }}>Login</button>
//         </form>
        
//         <div className="social-login">
//           <button className="google-login" style={{background:'lightred'}}><FaGoogle /> Login with Google</button>
//           <button className="facebook-login"><FaFacebook /> Login with Facebook</button>
//         </div>
        
//         <div className="signup-link">
//           Don't have an account? <span onClick={onOpenRegister} style={{ color: '#0056b3', cursor: 'pointer' }}>Sign Up</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import OurLogo from '../Assests/LogoPic.png';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

function Login({ isOpen, onClose, onOpenRegister, onLoginSuccess }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');  // State for success or error messages
  const [isSuccess, setIsSuccess] = useState(false);  // State to check if login is successful

  if (!isOpen) return null;

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Check for specific credentials
    if (email === 'dhanu@gmail.com' && password === 'dhanusiva') {
      setIsSuccess(true);
      setMessage('Login successful');
      setTimeout(() => {
        navigate('/Dashboard');  // Redirect to Dashboard for specific credentials
        onClose();  // Close the popup after login attempt
      }, 2000);  // Close after 2 seconds
      return;
    }

    try {
      const response = await fetch('http://localhost:9001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      onLoginSuccess(data.username); // Pass the username to the parent component

      setIsSuccess(true);
      setMessage('Login successful');
      setTimeout(() => {
        navigate('/');  // Redirect to home page after login
        onClose();  // Close the popup after login attempt
      }, 2000);  // Close after 2 seconds
    } catch (error) {
      setIsSuccess(false);
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <button className="close-button" onClick={onClose} style={{ width: '10px', color: 'black', marginRight: '20px', backgroundColor: 'white' }}>×</button>
        <img src={OurLogo} alt="Logo" style={{ marginLeft: '130px', width: '100px' }} />
        <h4 className='different' style={{ backgroundColor: "#fff", marginLeft: '130px' }}>Sign In</h4>

        {message && (
          <div className={`message ${isSuccess ? 'success' : 'error'}`}>
            {isSuccess ? '✔️' : '❌'} {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}

          <button type="submit" style={{ backgroundColor: "#0056b3", marginLeft:'50px', width:'248px'}}>Login</button>
        </form>

        <div className="social-login" style={{marginLeft:'50px'}}>
          <button className="google-login" style={{ background: 'lightred' }}><FaGoogle /> Login with Google</button>
          <button className="facebook-login"><FaFacebook /> Login with Facebook</button>
        </div>

        <div className="signup-link">
          Don't have an account? <span onClick={onOpenRegister} style={{ color: '#0056b3', cursor: 'pointer' }}>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
