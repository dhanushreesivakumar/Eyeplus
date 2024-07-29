import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/LogoPic.png';
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
      setEmailError('Email is not valid');
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
        'Not a strong password.'
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
      <img src={logo} className='app-logo'></img>
        <h2 style={{fontSize:'100%'}}>Login to Eye<span>+</span> </h2>
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
        <button type="submit" className='button1' disabled={!isFormValid}><Link to="/Home">Login</Link></button>
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