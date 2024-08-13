import React from 'react';
import './EndPayment.css';
import im from '../Assests/image1.jpg';
import { useLocation, useNavigate } from 'react-router';
import image from '../Assests/image1.jpg';

const EndPayment = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { totalPrice } = location.state || {};  // Get the totalPrice from the state

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_GcZZFDPP0jHtC4',
      amount: totalPrice * 100,  // Razorpay works with paise, so multiply by 100
      currency: 'INR',
      name: 'Eye+',
      description: `Payment for Order`,
      image: image,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        nav("/last");
      },
      prefill: {
        name: 'Tony Stark',
        email: 'Tonystark@example.com',
        contact: '91300040030'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: ' #007bff'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${im})`,  // Corrected here
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      
      <div className="container-ii">
        <h1>Make a Payment</h1>
        <p>Total Payable: ₹{totalPrice}</p> {/* Display total price */}
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default EndPayment;
