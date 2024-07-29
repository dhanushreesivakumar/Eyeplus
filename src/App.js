import { BrowserRouter, Route,Routes } from 'react-router-dom';
// import './App.css';
 import Home from './Components/Homepage/Home';
import Login from './Components/loginup/Login';
 import Register from './Components/loginup/Register';
 import MainComponent from './Components/ProductPage/MainComponent';
// import AdminDashboard from './Components/Admin/AdminDashboard';
//  import AdminUsers from './Components/Admin/AdminUsers';
// import Navbar from './Components/Navbar/navbar';
// import ImageCarousel from './Components/Homepage/ImageCarousel';
// import ProductCarousel from './Components/Homepage/ProductCarousel';
import Navbar from './Components/Navbar/navbar';
import Options from './Components/Navbar/Options';
import FilterComponent from './Components/ProductPage/FilterComponent';

 import ProductGrid from './Components/ProductPage/ProductGrid';
import Contact from './Components/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (

    <div className="App">
     
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Footer/>}/>
    <Route path="/register" element={<Register />} /> 
    <Route path="/Home" element={<Home/>}/> 
    <Route path="/Contact" element={<Contact/>}/>  
      <Route path="/Product" element={<MainComponent/>}/>  
    </Routes>
     </BrowserRouter>


   
     

  </div>
  );
}

export default App;

