
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Navbar from '../Navbar/navbar';
import './CombinedComponent.css';

const CombinedComponent = () => {
  const [filters, setFilters] = useState({
    brand: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    color: '',
    frameSize: '',
    gender: '',
    frameShape: '',
    material: '',
    frameWidth: '',
    ageGroup: '',
    weightGroup: '',
    prescriptionType: '',
    supportedPowers: '',
    collection: '',
    glassColor: '',
    subCollection: '',
    frameWidthValue: '',
    productType: ''
  });

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9001/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.brand || product.name.toLowerCase() === filters.brand.toLowerCase()) &&
      (!filters.category || product.category === filters.category) &&
      (!filters.minPrice || product.price >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice)) &&
      (!filters.color || product.color.toLowerCase() === filters.color.toLowerCase()) &&
      (!filters.frameSize || product.frameSize.toLowerCase() === filters.frameSize.toLowerCase()) &&
      (!filters.gender || product.gender.toLowerCase() === filters.gender.toLowerCase()) &&
      (!filters.frameShape || product.frameShape.toLowerCase() === filters.frameShape.toLowerCase()) &&
      (!filters.material || product.material.toLowerCase() === filters.material.toLowerCase()) &&
      (!filters.frameWidth || product.frameWidth.toLowerCase() === filters.frameWidth.toLowerCase()) &&
      (!filters.ageGroup || product.ageGroup.toLowerCase() === filters.ageGroup.toLowerCase()) &&
      (!filters.weightGroup || product.weightGroup.toLowerCase() === filters.weightGroup.toLowerCase()) &&
      (!filters.prescriptionType || product.prescriptionType.toLowerCase() === filters.prescriptionType.toLowerCase()) &&
      (!filters.supportedPowers || product.supportedPowers.toLowerCase() === filters.supportedPowers.toLowerCase()) &&
      (!filters.collection || product.collection.toLowerCase() === filters.collection.toLowerCase()) &&
      (!filters.glassColor || product.glassColor.toLowerCase() === filters.glassColor.toLowerCase()) &&
      (!filters.subCollection || product.subCollection.toLowerCase() === filters.subCollection.toLowerCase()) &&
      (!filters.frameWidthValue || product.frameWidthValue.toLowerCase() === filters.frameWidthValue.toLowerCase()) &&
      (!filters.productType || product.productType.toLowerCase() === filters.productType.toLowerCase())
    );
  });

  // const handleAddToCart = (product) => {
  //   setCart([...cart, product]);
  //   setPopupMessage(`${product.name} has been added to the cart!`);
  //   setShowPopup(true);
  //   setTimeout(() => setShowPopup(false), 2000); // Pop-up disappears after 2 seconds
  // };

  const handleAddToCart = async (product) => {
    try {
      // Send the product details to the backend to store in the cart table
      const response = await axios.post('http://localhost:9001/api/cart', product);
  
      if (response.status === 200) {
        // Update the local cart state
        setCart([...cart, product]);
        setPopupMessage(`₹{product.name} has been added to the cart!`);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000); // Pop-up disappears after 2 seconds
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setPopupMessage('Failed to add product to cart.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };
  

  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="main-container">
     <Navbar cartCount={totalCartItems} />
      <div className="container">
        <div className="filter-section">
          <h3>Filters</h3>
          <div className="filter-group">
          <label>
              Brand:
              <select name="brand" onChange={handleFilterChange} value={filters.brand}>
                <option value="">All</option>
                <option value="Fastrack">Fastrack</option>
                <option value="Ray-Ban">Ray-Ban</option>
                <option value="Oakley">Oakley</option>
                <option value="Tom Ford">Tom Ford</option>
                <option value="Vogue">Vogue</option>
                <option value="Carrera">Carrera</option>
                <option value="John Jacobs">John Jacobs</option>
                <option value="Titan">Titan</option>
              </select>
            </label>
            <label>
              Category:
              <select name="category" onChange={handleFilterChange} value={filters.category}>
                <option value="">All</option>
                <option value="Full Rim">Full Rim</option>
                <option value="Half Rim">Half Rim</option>
                <option value="Rimless">Rimless</option>
                <option value="Sunglasses">Sunglasses</option>
              </select>
            </label>
            <label>
              Price Range:
              <input type="number" name="minPrice" placeholder="Min Price" onChange={handleFilterChange} value={filters.minPrice} />
              <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} value={filters.maxPrice} />
            </label>
            <label>
              Color:
              <select name="color" onChange={handleFilterChange} value={filters.color}>
                <option value="">All</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Gold">Gold</option>
              </select>
            </label>
            <label>
              Frame Size:
              <select name="frameSize" onChange={handleFilterChange} value={filters.frameSize}>
                <option value="">All</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </label>
            <label>
              Gender:
              <select name="gender" onChange={handleFilterChange} value={filters.gender}>
                <option value="">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Unisex">Unisex</option>
              </select>
            </label>
            <label>
              Frame Shape:
              <select name="frameShape" onChange={handleFilterChange} value={filters.frameShape}>
                <option value="">All</option>
                <option value="Rectangle">Rectangle</option>
                <option value="Wayfarer">Wayfarer</option>
                <option value="Aviator">Aviator</option>
                <option value="Round">Round</option>
              </select>
            </label>
            <label>
              Material:
              <select name="material" onChange={handleFilterChange} value={filters.material}>
                <option value="">All</option>
                <option value="Plastic">Plastic</option>
                <option value="Metal">Metal</option>
              </select>
            </label>
            <label>
              Frame Width:
              <select name="frameWidth" onChange={handleFilterChange} value={filters.frameWidth}>
                <option value="">All</option>
                <option value="Narrow">Narrow</option>
                <option value="Medium">Medium</option>
                <option value="Wide">Wide</option>
              </select>
            </label>
            <label>
              Age Group:
              <select name="ageGroup" onChange={handleFilterChange} value={filters.ageGroup}>
                <option value="">All</option>
                <option value="Kids">Kids</option>
                <option value="Teens">Teens</option>
                <option value="Adults">Adults</option>
              </select>
            </label>
            <label>
              Weight Group:
              <select name="weightGroup" onChange={handleFilterChange} value={filters.weightGroup}>
                <option value="">All</option>
                <option value="Light">Light</option>
                <option value="Medium">Medium</option>
                <option value="Heavy">Heavy</option>
              </select>
            </label>
            <label>
              Prescription Type:
              <select name="prescriptionType" onChange={handleFilterChange} value={filters.prescriptionType}>
                <option value="">All</option>
                <option value="Single Vision">Single Vision</option>
                <option value="Bifocal">Bifocal</option>
                <option value="Progressive">Progressive</option>
              </select>
            </label>
            <label>
              Supported Powers:
              <select name="supportedPowers" onChange={handleFilterChange} value={filters.supportedPowers}>
                <option value="">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <label>
              Collection:
              <select name="collection" onChange={handleFilterChange} value={filters.collection}>
                <option value="">All</option>
                <option value="Classic">Classic</option>
                <option value="Trendy">Trendy</option>
              </select>
            </label>
            <label>
              Glass Color:
              <select name="glassColor" onChange={handleFilterChange} value={filters.glassColor}>
                <option value="">All</option>
                <option value="Clear">Clear</option>
                <option value="Tinted">Tinted</option>
                <option value="Polarized">Polarized</option>
              </select>
            </label>
            <label>
              Sub Collection:
              <select name="subCollection" onChange={handleFilterChange} value={filters.subCollection}>
                <option value="">All</option>
                <option value="Retro">Retro</option>
                <option value="Modern">Modern</option>
              </select>
            </label>
            <label>
              Frame Width Value:
              <select name="frameWidthValue" onChange={handleFilterChange} value={filters.frameWidthValue}>
                <option value="">All</option>
                <option value="120mm">120mm</option>
                <option value="130mm">130mm</option>
              </select>
            </label>
            <label>
              Product Type:
              <select name="productType" onChange={handleFilterChange} value={filters.productType}>
                <option value="">All</option>
                <option value="Eyeglasses">Eyeglasses</option>
                <option value="Sunglasses">Sunglasses</option>
              </select>
            </label>
          </div>
        </div>
        <div className="product-section">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Brand: {product.name}</p>
              <p>Price: ₹{product.price}</p>
              <p>Color: {product.color}</p>
              <button onClick={() => handleAddToCart(product)}>
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default CombinedComponent;

