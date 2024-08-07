import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import OurLogo from '../Assests/LogoPic.png';

function Login({ isOpen, onClose }) {
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
        
        <button className="close-button" onClick={onClose} style={{width:'10px', color:'black', marginRight:'20px', backgroundColor:'white' }}>×</button>
        <img src={OurLogo} alt="Logo" style={{ marginLeft: '10px' }} />
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

          <button type="submit" style={{ backgroundColor: "#0056b3" }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
