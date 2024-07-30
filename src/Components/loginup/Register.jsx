// import React, { useState } from 'react';
// import './Register.css';
// import logo from '../Assests/Logo.png';
// import { Link } from 'react-router-dom';

// function Register() {
//   const [fname, setFname] = useState('');
//   const [lname, setLname] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [policyAccepted, setPolicyAccepted] = useState(false);

//   const handleEmailChange = (e) => {
//     const { value } = e.target;
//     setEmail(value);
//     validateEmail(value);
//   };

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
//     if (!regex.test(email)) {
//       setEmailError('Email must be a valid address and end with .com or .in.');
//     } else {
//       setEmailError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     if (!policyAccepted) {
//       alert('You must accept the privacy policy');
//       return;
//     }
//     // Handle form submission
//     console.log('First-Name:', fname);
//     console.log('Last-Name', lname);
//     console.log('Phone-No:', phone);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Add your registration logic here
//   };

//   return (
//     <div className='register'>
//     <div className="register-container">
//       <div>
//         <img src={logo} className="eye-logo" alt="logo" />
//         <h2>Welcome to Eye<span>+</span> </h2>
//       </div>
//       <h2>Create an Account</h2>
//       <form onSubmit={handleSubmit}>
//         {error && <p className="error">{error}</p>}
//         <div className="form-group">
//           <label>First Name<span>*</span></label>
//           <input
//             type="text"
//             value={fname}
//             onChange={(e) => setFname(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             value={lname}
//             onChange={(e) => setLname(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone No<span>*</span></label>
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <label>Email<span>*</span></label>
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//           {emailError && <p className="error">{emailError}</p>}
//         </div>
//         <div className="form-group">
//           <label>Password<span>*</span></label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password<span>*</span></label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="checkbox-group">
//           <input
//             type="checkbox"
//             checked={policyAccepted}
//             onChange={(e) => setPolicyAccepted(e.target.checked)}
//             required
//           />
//           <label>
//             I accept the <a href="/privacy-policy" target="_blank">Privacy Policy</a><span>*</span>
//           </label>
//         </div>
//         <button type="submit" disabled={!policyAccepted || emailError || error} className='but'><Link to="/Home">Register</Link></button>
//         <div className='have-account'>
//           <p>Already have an account ? <Link to="/">SignIn</Link></p>
//         </div>
//       </form>

      
//     </div>
//     </div>
//   );
// }

// export default Register;
// //Register.jsx



// src/components/Register.js
import React, { useState } from 'react';
import './Register.css';
import OurLogo from '../Assests/LogoPic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Register({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Perform registration logic here
    onClose();  // Close the popup after successful registration
  };

  return (
    <div className="register-popup">
      <div className="register-popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <img src={OurLogo} alt="Logo" style={{ marginLeft: '100px', height:'100px'}} />
        <h4 className='different' style={{ backgroundColor: "#fff", marginLeft: '130px' }}>Sign Up</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className="error">{errors.username}</div>}

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
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{width:'100%'}}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && <div className="error">{errors.password}</div>}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-container">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{width:'100%'}}
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

          <button type="submit" style={{ backgroundColor: "#0056b3" }}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

