import { BrowserRouter, Route,Routes } from 'react-router-dom';
 import './App.css';
 import Home from './Components/Homepage/Home';

 import Register from './Components/loginup/Register';
 import MainComponent from './Components/ProductPage/MainComponent';

import Navbar from './Components/Navbar/navbar';
import ImageCarousel from './Components/Homepage/ImageCarousel';
import ProductCarousel from './Components/Homepage/ProductCarousel';

import Options from './Components/Navbar/Options';
import FilterComponent from './Components/ProductPage/FilterComponent';

 import ProductGrid from './Components/ProductPage/ProductGrid';
import Contact from './Components/Contact';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import EyeIn from './Components/Homepage/EyeIn';
import Login from './Components/loginup/Login';


function App() {
  return (

    <div className="App">
     
     <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Login" element={<Login/>}/>
 
    <Route path="/register" element={<Register />} /> 
    <Route path="/Contact" element={<Contact/>}/>  
      <Route path="/Product" element={<MainComponent/>}/>  
      <Route path="/Aboutus" element={<AboutUs></AboutUs>}/> 
    </Routes>
     </BrowserRouter> 

   
     

  </div>
  );
}

export default App;

