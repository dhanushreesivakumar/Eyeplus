import React from 'react'
import Navbar from '../Navbar/navbar'
import Options from '../Navbar/Options'
import ImageCarousel from './ImageCarousel'
import eyetest from '../Assests/eyetest.webp'
import '../Homepage/Home.css';
import Eyetest from './Eyetest'
import OnlineEyetest from './Onlineeyetest'
import Premiunmwear from './Premiumwear'
import Glam from './Glamlenses'
import Ourbrand from './OurBrands'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
      
      <Navbar></Navbar>
     <Options></Options>
     <ImageCarousel></ImageCarousel>
     <div className='eyetest'>
     <h3>EYE TEST AT HOME</h3>
    
     </div>
     <Eyetest></Eyetest>
     <div className='eyetest'>
     <h3>FREE ONLINE EYE TEST</h3>
     </div>
     <div>
      <OnlineEyetest></OnlineEyetest>
     </div>
     <div className='eyetest'>
     <h3>
      PREMIUM EYEWEAR</h3>
     </div>
     <div>
      <Premiunmwear></Premiunmwear>
     </div>
     <div className='eyetest'>
     <h3>AQUACOLOR - GLAM UP WITH COLOR LENSES</h3>
    
     </div>
     <Glam></Glam>
     <div className='eyetest'>
     <h3>OUR BRANDS</h3>
    
     </div>
     <Ourbrand></Ourbrand>
     <div>
    <Footer></Footer>
    </div>
      </div>
      
    
  )
}
