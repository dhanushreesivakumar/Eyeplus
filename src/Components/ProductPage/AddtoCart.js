


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddtoCart.css';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:9001/api/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    try {
      await axios.delete(`http://localhost:9001/api/cart/${id}`);
      setCartItems(cartItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleRepeatItem = async (item) => {
    try {
      const updatedItem = { ...item, quantity: item.quantity + 1 }; // Increment the quantity
      await axios.post('http://localhost:9001/api/cart', updatedItem);
      setCartItems(prevItems => 
        prevItems.map(prevItem => 
          prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
        )
      );
    } catch (error) {
      console.error('Error repeating item:', error);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <div className="cart-container">
        <div className="product-section">
          <h5 style={{color:'lightblue', font:'revert-layer'}}>Cart ({cartItems.length} items)</h5>
          <ul className="cart-items-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="product-image" />
                <div className="item-details">
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                
                  <div className="item-actions">
                    <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    <button className="repeat-button" onClick={() => handleRepeatItem(item)}>Repeat</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="billing-section">
          <h3>Bill Details</h3>
          <p>Total item price: ₹{totalPrice}</p>
          <p>Total payable: ₹{totalPrice}</p>
         <Link to="/bookingaddress"><button className="checkout-button">Proceed To Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;


