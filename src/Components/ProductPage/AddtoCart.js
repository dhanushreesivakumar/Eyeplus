import React from 'react';



const AddtoCart = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
        
    <div className="cart-page" style={{ marginTop: '124px' }}>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
   
    </div>
  );
};

export default AddtoCart;