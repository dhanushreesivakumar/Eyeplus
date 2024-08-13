import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeService.css';
import eye from '../Assests/image4.jpg';
import Navbar from '../Navbar/navbar';
// import eye1 from '../Assests/LogoPic.png';

const HomeService = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/eyetestlogin');
  };

  return (
    
    <div className="App18">
      <Navbar></Navbar>
      {/* <header className="App-header"> */}
        {/* <div className="navbar">
          <img src={eye1} alt="EyeTest at Home" className="logo" />
          <div className="phone">+918068864519</div>
        </div> */}
      {/* </header> */}
      <main>
        <div className="content">
          <img src={eye} style={{ height:'400px', marginTop:'100px',borderRadius:'50px'}} alt="Eye Test" className="main-image" />
          <div className="info">
            <h1>Eye + at Home</h1>
            <p>Eye Test & Frame Trial Service</p>
            <div className="rating">
              <span>4.9</span>
              <span>(17k)</span>
            </div>
            <div className="eligibility">
              <h2>Eye test eligibility</h2>
              <ul>
                <li>✅ A well-lit room with 10 ft space is required</li>
                <li>✅ Required age for eye test is 14 - 75 years</li>
                <li>❌ Not for Diabetics or those with High BP (Clinical eye test is required)</li>
              </ul>
            </div>
            <div className="expect">
              <h2>What to expect?</h2>
              <ul>
                <li>12 Step Eye Checkup by certified professionals</li>
                <li>Latest Eye Test Equipments</li>
                <li>Try 150+ frames at home</li>
              </ul>
            </div>
            <div className="booking">
              <div className="price" style={{marginBottom:'10px'}}>Eye + at Home ₹99</div>
              <button className="book-button"  style={{backgroundColor:'#0a638f',marginBottom:'50px'}}onClick={handleBookAppointment}>BOOK APPOINTMENT</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeService;