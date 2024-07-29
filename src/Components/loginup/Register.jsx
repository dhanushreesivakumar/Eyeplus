import React, { useState } from 'react';
import './Register.css';
import logo from '../Assests/Logo.png';
import { Link } from 'react-router-dom';

function Register() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [policyAccepted, setPolicyAccepted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!policyAccepted) {
      alert('You must accept the privacy policy');
      return;
    }
    // Handle form submission
    console.log('First-Name:', fname);
    console.log('Last-Name', lname);
    console.log('Phone-No:', phone);
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your registration logic here
  };

  return (
    <div className='register'>
    <div className="register-container">
      <div>
        <img src={logo} className="eye-logo" alt="logo" />
        <h2>Welcome to Eye<span>+</span> </h2>
      </div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>First Name<span>*</span></label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone No<span>*</span></label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Email<span>*</span></label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label>Password<span>*</span></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password<span>*</span></label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={policyAccepted}
            onChange={(e) => setPolicyAccepted(e.target.checked)}
            required
          />
          <label>
            I accept the <a href="/privacy-policy" target="_blank">Privacy Policy</a><span>*</span>
          </label>
        </div>
        <button type="submit" disabled={!policyAccepted || emailError || error} className='but'><Link to="/Home">Register</Link></button>
        <div className='have-account'>
          <p>Already have an account ? <Link to="/">SignIn</Link></p>
        </div>
      </form>

      
    </div>
    </div>
  );
}

export default Register;
//Register.jsx