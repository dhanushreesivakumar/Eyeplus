import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const BookingAddress = () => {
    const [formData, setFormData] = useState({
        addressLine1: '',
        addressLine2: '',
        pincode: '',
        city: '',
        state: '',
        country: 'India',
    });

    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can add code here to send the form data to the backend
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    const handleCheckout = () => {
        navigate("/endpayment", { state: { totalPrice } });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#f5f5f5', border: '1px solid #ccc', borderRadius: '50px' }}>
            {/* Address Form Section */}
            <div style={{ flex: '1', marginRight: '20px' }}>
                <h2>Save address</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Address Line 1*</label>
                        <input
                            type="text"
                            name="addressLine1"
                            value={formData.addressLine1}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Address Line 2</label>
                        <input
                            type="text"
                            name="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Pincode*</label>
                        <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>City/District*</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>State*</label>
                        <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                        >
                            <option value="">Select state</option>
                            <option value="">Select state</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
                            {/* Add other states here */}
                        </select>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Country*</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            readOnly
                            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
                        Save address
                    </button>
                </form>
            </div>

            {/* Billing Section */}
            <div style={{ flex: '0.5', border: '1px solid #ccc', padding: '20px', backgroundColor: '#f9f9f9', alignSelf: 'flex-start' }}>
                <h3>Bill Details</h3>
                <p>Total item price: ₹{totalPrice}</p>
                <p>Total payable: ₹{totalPrice}</p>
                <button onClick={handleCheckout} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '15px' }}>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

export default BookingAddress;
