import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/Logo.png';
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    validateEmail(value);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
    if (!regex.test(email)) {
      setEmailError('Email must be a valid address and end with .com or .in.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    validatePassword(value);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_])[A-Za-z\d\W_]{8,}$/;
    if (!regex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
    } else {
      setPasswordError('');
    }
  };

  useEffect(() => {
    setIsFormValid(
      email !== '' && password !== '' && emailError === '' && passwordError === ''
    );
  }, [email, password, emailError, passwordError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordError || emailError) {
      alert('Please fix the errors in the form.');
      return;
    }
    console.log('Email Address:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login1_container'>
    <div className="login-container">
      <div>
      
        <h2>Login to Eye<span>+</span> </h2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address<span>*</span></label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className='field'
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label>Password<span>*</span></label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className='field'
            required
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <br />
        <button type="submit" className='button' disabled={!isFormValid}><Link to="/home">Login</Link></button>
        <br/>
        <div className="no-account">
          <Link to="/register">Don't have an account? Signup</Link>
        </div>
      </form>
      </div>


      
    </div>
  );
}

export default Login;