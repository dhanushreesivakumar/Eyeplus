// import React, { useState } from 'react';
// import './Register.css';
// import OurLogo from '../Assests/LogoPic.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// function Register({ isOpen, onClose }) {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');  // New state for phone
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   if (!isOpen) return null;

//   const validate = () => {
//     const errors = {};
//     if (!username) errors.username = 'Username is required';
//     if (!email) errors.email = 'Email is required';
//     if (!phone) errors.phone = 'Phone number is required';  // Validate phone
//     if (!password) errors.password = 'Password is required';
//     if (password.length < 6) errors.password = 'Password must be at least 6 characters';
//     if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
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
//       const response = await fetch('http://localhost:9001/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//           phone  // Include phone in the request body
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('User registered successfully:', data);
//       onClose();  // Close the popup after successful registration
//     } catch (error) {
//       console.error('There was a problem with the registration:', error);
//     }
//   };

//   return (
//     <div className="register-popup">
//       <div className="register-popup-content">
//         <button className="close-button" onClick={onClose}style={{width:'10px', color:'black', marginRight:'20px', backgroundColor:'white' }}>×</button>
//         <img src={OurLogo} alt="Logo" style={{ marginLeft: '100px', height:'100px'}} />
//         <h4 className='different' style={{ backgroundColor: "#fff", marginLeft: '130px' }}>Sign Up</h4>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           {errors.username && <div className="error">{errors.username}</div>}

//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <div className="error">{errors.email}</div>}

//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="text"
//             id="phone"
//             placeholder="Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           {errors.phone && <div className="error">{errors.phone}</div>}

//           <label htmlFor="password">Password</label>
//           <div className="password-container">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{width:'100%'}}
//             />
//             <FontAwesomeIcon
//               icon={showPassword ? faEyeSlash : faEye}
//               className="password-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//             />
//           </div>
//           {errors.password && <div className="error">{errors.password}</div>}

//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <div className="password-container">
//             <input
//               type={showConfirmPassword ? 'text' : 'password'}
//               id="confirmPassword"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               style={{width:'100%'}}
//             />
//             <FontAwesomeIcon
//               icon={showConfirmPassword ? faEyeSlash : faEye}
//               className="password-toggle"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             />
//           </div>
//           {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

//           <button type="submit" style={{ backgroundColor: "#0056b3" }}>Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from 'react';
import './Register.css';
import OurLogo from '../Assests/LogoPic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Register({ isOpen, onClose, onLoginOpen }) {  // Add onLoginOpen to props
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');  // New state for phone
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!phone) errors.phone = 'Phone number is required';  // Validate phone
    if (!password) errors.password = 'Password is required';
    if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
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
      const response = await fetch('http://localhost:9001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phone  // Include phone in the request body
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('User registered successfully:', data);
      onClose();  // Close the popup after successful registration
    } catch (error) {
      console.error('There was a problem with the registration:', error);
    }
  };

  return (
    <div className="register-popup">
      <div className="register-popup-content">
        <button className="close-button" onClick={onClose} style={{width:'10px', color:'black', marginRight:'20px', backgroundColor:'white' }}>×</button>
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

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}

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
