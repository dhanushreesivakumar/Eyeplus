// import React from 'react';

// const ProductCard = ({ product, addToCart }) => (
//   <div className="product-card">
//     <img src={product.image} alt={product.name} />
//     <h3>{product.name}</h3>
//     <p>{product.description}</p>
//     <p>Price: ₹{product.price}</p>
//     <button onClick={() => addToCart(product)}>Add to Cart</button>
//   </div>
// );

// export default ProductCard;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="product-card">
      <div className="favorite-icon" onClick={toggleFavorite}>
        <FontAwesomeIcon 
          icon={isFavorited ? solidHeart : regularHeart} 
          className={isFavorited ? 'favorited' : 'not-favorited'} 
          style={{ cursor: 'pointer', marginLeft: '170px' }} 
        />
      </div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`}>Details</Link>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
