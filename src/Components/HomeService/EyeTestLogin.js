import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EyeTestLogin.css';
import logo from '../Assests/LogoPic.png';

const EyeTestLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP request logic here
    console.log('Phone Number:', phoneNumber);
    // After handling OTP logic, navigate to the AddressSelection page
    navigate('/addselection');
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src={logo} alt="Eye Plus at Home" className="login-logo" />
        <div className="phone-number">+918068864519</div>
      </header>
      <main className="login-main">
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="phone-number">Enter Mobile Number</label>
            <input
              type="text"
              id="phone-number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter a valid 10 digit number"
              required
            />
            <div className="checkbox-container">
              <input type="checkbox" id="whatsapp-updates" />
              <label htmlFor="whatsapp-updates">Send me text updates on WhatsApp</label>
            </div>
            <button type="submit" className="submit-button" style={{backgroundColor:'#0a638f'}}>Proceed</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EyeTestLogin;