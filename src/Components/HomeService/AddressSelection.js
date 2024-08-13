import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddressSelection.css';
import eye1 from '../Assests/LogoPic.png';

const AddressSelection = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/doctorappointment');
  };

  return (
    <div className="address-container">
      <header className="address-header">
        <Link to="/"><img src={eye1} alt="EyeTest at Home" className="address-logo" /></Link>
        <div className="phone-number">+918068864519</div>
      </header>
      <main className="address-main">
        <div className="address-form-container">
          <h1>Choose Address</h1>
          <div className="address-form">
            <div className="address-option">
              <input type="radio" id="address1" name="address" value="address1" />
              <label htmlFor="address1">Address 1: 123 Main St, City, Country</label>
            </div>
            <div className="address-option">
              <input type="radio" id="address2" name="address" value="address2" />
              <label htmlFor="address2">Address 2: 456 Another St, City, Country</label>
            </div>
            <div className="add-new-address">
              <button>Add New Address</button>
            </div>
            <button className="submit-button" onClick={handleProceed}>Proceed</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddressSelection;