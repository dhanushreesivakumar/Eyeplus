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
import Login from './Components/loginup/Login';
import Service from './Components/Services/Service';
import DashboardPage from './Components/Admin/DashboardPage';
import Enquiries from './Components/Admin/Enquiries';
import AddProductPage from './Components/Admin/AddProductsPage';
import Payments from './Components/Admin/Payments';
import DetailForm from './Components/Services/DetailForm';
import Instruction from './Components/Services/Instruction';
import EyeTestForm from './Components/Services/EyeTestForm';
import CameraComponent from './Components/Services/CameraComponent';
import SecondTest from './Components/Services/SecondTest';
import DoctorAppointment from './Components/Services/DoctorAppointment';
import EyeShopLocator from './Components/Services/MapComponent';
import CombinedComponent from './Components/ProductPage/CombinedComponent';
import AddtoCart from './Components/ProductPage/AddtoCart';


function App() {
  return (

    <div className="App">
     
     <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home></Home>}/>
     <Route path="/doctorappointment" element={<DoctorAppointment></DoctorAppointment>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Service" element={<Service></Service>}/>  
     <Route path="/productpage" element={<CombinedComponent></CombinedComponent>}/>
     <Route path="/addtocart" element={<AddtoCart></AddtoCart>}/>  
     <Route path="/register" element={<Register />} /> 
    <Route path="/Contact" element={<Contact></Contact>}/>  
      <Route path="/Aboutus" element={<AboutUs></AboutUs>}/> 
      <Route path="/detail-form" element={<DetailForm></DetailForm>}/>
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/enquiries" element={<Enquiries />} />
      <Route path="/add-products" element={<AddProductPage />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/instruct" element={<Instruction></Instruction>} />
      <Route path="/eyetestform" element={<EyeTestForm></EyeTestForm>} />
      <Route path="/CameraComponent" element={<CameraComponent></CameraComponent>} />    
    </Routes>
     </BrowserRouter> 

   
     

  </div>
  );
}

export default App;

