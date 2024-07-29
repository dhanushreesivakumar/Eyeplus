import React, { useState } from 'react';
import './Options.css';
import Navbar from './navbar';
import { Link } from 'react-router-dom';



const Options = () => {
  return (
    <div>
      <Navbar></Navbar>
     
     
      <nav className="nav" >
        <ul className="nav-links" >
            <a href="#sunglasses" className="nav-link"><Link to="/Product">Sunglasses </Link> </a>
            <a href="#eyeglasses" className="nav-link"><Link to="/Product">Eyeglasses</Link></a>
            <a href="#kids-glasses" className="nav-link"><Link to="/Product">Kids Glasses</Link></a>
            <a href="#contact-lens" className="nav-link"><Link to="/Product">Contact Lens</Link></a>
            <a href="#store-locator" className="nav-link"><Link to="/Product">Store Locator</Link></a>
            <a href="#bride-to-be" className="nav-link"><Link to="/Product">Bride to be Glasses</Link></a>
        </ul>
      </nav>
      </div>
      
   
    
  );
};

export default Options;
