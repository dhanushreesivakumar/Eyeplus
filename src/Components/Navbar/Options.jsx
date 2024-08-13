import React from 'react';
import './Options.css';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Options = () => {
  return (
    <div>
      
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/productpage" className="nav-link">Sunglasses</Link>
          </li>
          <li className="nav-item">
            <Link to="/productpage" className="nav-link">Eyeglasses</Link>
          </li>
          <li className="nav-item">
            <Link to="/productpage" className="nav-link">Kids Glasses</Link>
          </li>
          <li className="nav-item">
            <Link to="/productpage" className="nav-link">Contact Lens</Link>
          </li>
          <li className="nav-item">
            <Link to="/productpage" className="nav-link">Store Locator</Link>
          </li>
          <li className="nav-item">
            <Link to="/productpage" className="nav-link">Bride to be Glasses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Options;
