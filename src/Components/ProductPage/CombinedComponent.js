import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Navbar from '../Navbar/navbar';
import './CombinedComponent.css';

const products = [
  // Your product objects here{
      
    {
      id: 21,
      name: 'Oakley Sport Sunglasses',
      description: 'For Men, Size: Medium',
      price: 4000,
      image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e10235-c7-eyeglasses_g_2375_image_pla.jpg',
      brand: 'Oakley',
      category: 'Sunglasses',
      color: 'Black',
      frameSize: 'Medium',
      gender: 'Men',
      frameShape: 'Rectangle',
      material: 'Plastic',
      frameWidth: 'Medium',
      ageGroup: 'Adults',
      weightGroup: 'Light',
      prescriptionType: 'None',
      supportedPowers: '',
      collection: 'Sport',
      glassColor: 'Polarized',
      subCollection: 'Limited Edition',
      frameWidthValue: 140,
      productType: 'Sunglasses'
    },
    {
      id: 22,
      name: 'Tom Ford FT5634-B Eyeglasses',
      description: 'For Women, Size: Medium',
      price: 7000,
      image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/black-gold-black-full-rim-round-john-jacobs-tr-flex-jj-e14410-c6-eyeglasses__dsc7005_20_06_2024.jpg',
      brand: 'Tom Ford',
      category: 'Full Rim',
      color: 'Black',
      frameSize: 'Medium',
      gender: 'Women',
      frameShape: 'Cat Eye',
      material: 'Plastic',
      frameWidth: 'Medium',
      ageGroup: 'Adults',
      weightGroup: 'Light',
      prescriptionType: 'Progressive',
      supportedPowers: '-4.00 to +3.00',
      collection: 'Modern',
      glassColor: 'Clear',
      subCollection: 'Signature',
      frameWidthValue: 140,
      productType: 'Eyeglasses'
    },
   
  {
    id: 17,
    name: 'John Jacobs Wayfarer Eyeglasses',
    description: 'For Men and Women, Size: Medium',
    price: 3600,
    image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Lenskart-Air-LA-E14362-C3-Eyeglasses_J_1886.jpg',
    brand: 'John Jacobs',
    category: 'Full Rim',
    color: 'Blue',
    frameSize: 'Medium',
    gender: 'Unisex',
    frameShape: 'Wayfarer',
    material: 'Plastic',
    frameWidth: 'Medium',
    ageGroup: 'Adults',
    weightGroup: 'Light',
    prescriptionType: 'Single Vision',
    supportedPowers: '-3.00 to +2.00',
    collection: 'Modern',
    glassColor: 'Clear',
    subCollection: 'Signature',
    frameWidthValue: 140,
    productType: 'Eyeglasses'
  },
  {
    id: 18,
    name: 'Ray-Ban Classic Wayfarer Sunglasses',
    description: 'For Men and Women, Size: Medium',
    price: 5800,
    image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/transparent-silver-blue-full-rim-rectangle-john-jacobs-tr-flex-jj-e14416-c5-eyeglasses__dsc7014_20_06_2024.jpg',
    brand: 'Ray-Ban',
    category: 'Sunglasses',
    color: 'Black',
    frameSize: 'Medium',
    gender: 'Unisex',
    frameShape: 'Wayfarer',
    material: 'Plastic',
    frameWidth: 'Medium',
    ageGroup: 'Adults',
    weightGroup: 'Medium',
    prescriptionType: 'None',
    supportedPowers: '',
    collection: 'Classic',
    glassColor: 'Tinted',
    subCollection: 'Signature',
    frameWidthValue: 140,
    productType: 'Sunglasses'
  },
  {
    id: 15,
    name: 'Vogue VO4178 Eyeglasses',
    description: 'For Women, Size: Small',
    price: 3200,
    image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-transparent-full-rim-round-vincent-chase-sleek-steel-vc-e15069-c1-eyeglasses_g_3598_10_14_22.jpg',
    brand: 'Vogue',
    category: 'Full Rim',
    color: 'Red',
    frameSize: 'Small',
    gender: 'Women',
    frameShape: 'Oval',
    material: 'Plastic',
    frameWidth: 'Narrow',
    ageGroup: 'Adults',
    weightGroup: 'Light',
    prescriptionType: 'Single Vision',
    supportedPowers: '-3.00 to +2.00',
    collection: 'Classic',
    glassColor: 'Clear',
    subCollection: 'Signature',
    frameWidthValue: 135,
    productType: 'Eyeglasses'
  },
  {
    id: 16,
    name: 'Carrera 1011/S Sunglasses',
    description: 'For Men, Size: Large',
    price: 4800,
    image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-transparent-grey-full-rim-wayfarer-john-jacobs-rich-acetate-jj-e11727--c6-eyeglasses_img_7072_24_02_2024.jpg',
    brand: 'Carrera',
    category: 'Sunglasses',
    color: 'Black',
    frameSize: 'Large',
    gender: 'Men',
    frameShape: 'Aviator',
    material: 'Plastic',
    frameWidth: 'Wide',
    ageGroup: 'Adults',
    weightGroup: 'Medium',
    prescriptionType: 'None',
    supportedPowers: '',
    collection: 'Sport',
    glassColor: 'Polarized',
    subCollection: 'Limited Edition',
    frameWidthValue: 145,
    productType: 'Sunglasses'
  },
  {
    id: 17,
    name: 'John Jacobs Wayfarer Eyeglasses',
    description: 'For Men and Women, Size: Medium',
    price: 3600,
    image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Lenskart-Air-LA-E14362-C3-Eyeglasses_J_1886.jpg',
    brand: 'John Jacobs',
    category: 'Full Rim',
    color: 'Blue',
    frameSize: 'Medium',
    gender: 'Unisex',
    frameShape: 'Wayfarer',
    material: 'Plastic',
    frameWidth: 'Medium',
    ageGroup: 'Adults',
    weightGroup: 'Light',
    prescriptionType: 'Single Vision',
    supportedPowers: '-3.00 to +2.00',
    collection: 'Modern',
    glassColor: 'Clear',
    subCollection: 'Signature',
    frameWidthValue: 140,
    productType: 'Eyeglasses'
  },
  {
    id: 18,
    name: 'Ray-Ban Classic Wayfarer Sunglasses',
    description: 'For Men and Women, Size: Medium',
    price: 5800,
    image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/transparent-silver-blue-full-rim-rectangle-john-jacobs-tr-flex-jj-e14416-c5-eyeglasses__dsc7014_20_06_2024.jpg',
    brand: 'Ray-Ban',
    category: 'Sunglasses',
    color: 'Black',
    frameSize: 'Medium',
    gender: 'Unisex',
    frameShape: 'Wayfarer',
    material: 'Plastic',
    frameWidth: 'Medium',
    ageGroup: 'Adults',
    weightGroup: 'Medium',
    prescriptionType: 'None',
    supportedPowers: '',
    collection: 'Classic',
    glassColor: 'Tinted',
    subCollection: 'Signature',
    frameWidthValue: 140,
    productType: 'Sunglasses'
  },
  {
    id: 19,
    name: 'Titan Oval Rimmed Eyeglasses',
    description: 'For Men, Size: Medium',
    price: 1800,
    image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/gold-black-half-rim-rectangle-john-jacobs-supreme-steel-jj-e11678-c8-eyeglasses_g_0849_02_14_23.jpg',
    brand: 'Titan',
    category: 'Full Rim',
    color: 'Black',
    frameSize: 'Medium',
    gender: 'Men',
    frameShape: 'Oval',
    material: 'Plastic',
    frameWidth: 'Medium',
    ageGroup: 'Adults',
    weightGroup: 'Light',
    prescriptionType: 'Single Vision',
    supportedPowers: '-3.00 to +2.00',
    collection: 'Modern',
    glassColor: 'Clear',
    subCollection: 'Signature',
    frameWidthValue: 140,
    productType: 'Eyeglasses'
  },
];

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

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.brand === '' || product.brand === filters.brand) &&
      (filters.category === '' || product.category === filters.category) &&
      (filters.minPrice === '' || product.price >= parseInt(filters.minPrice)) &&
      (filters.maxPrice === '' || product.price <= parseInt(filters.maxPrice)) &&
      (filters.color === '' || product.color === filters.color) &&
      (filters.frameSize === '' || product.frameSize === filters.frameSize) &&
      (filters.gender === '' || product.gender === filters.gender) &&
      (filters.frameShape === '' || product.frameShape === filters.frameShape) &&
      (filters.material === '' || product.material === filters.material) &&
      (filters.frameWidth === '' || product.frameWidth === filters.frameWidth) &&
      (filters.ageGroup === '' || product.ageGroup === filters.ageGroup) &&
      (filters.weightGroup === '' || product.weightGroup === filters.weightGroup) &&
      (filters.prescriptionType === '' || product.prescriptionType === filters.prescriptionType) &&
      (filters.supportedPowers === '' || product.supportedPowers === filters.supportedPowers) &&
      (filters.collection === '' || product.collection === filters.collection) &&
      (filters.glassColor === '' || product.glassColor === filters.glassColor) &&
      (filters.subCollection === '' || product.subCollection === filters.subCollection) &&
      (filters.frameWidthValue === '' || product.frameWidthValue === parseInt(filters.frameWidthValue)) &&
      (filters.productType === '' || product.productType === filters.productType)
    );
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div className="main-container">
      <Navbar cartItems={cart} wishlistItems={wishlist} />
      <div className="filter-section">
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
          </select>
        </label>
        <label>
          Sub Collection:
          <select name="subCollection" onChange={handleFilterChange} value={filters.subCollection}>
            <option value="">All</option>
            <option value="SubCollection1">SubCollection1</option>
            <option value="SubCollection2">SubCollection2</option>
          </select>
        </label>
        <label>
          Frame Width Value:
          <select name="frameWidthValue" onChange={handleFilterChange} value={filters.frameWidthValue}>
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label>
          Product Type:
          <select name="productType" onChange={handleFilterChange} value={filters.productType}>
            <option value="">All</option>
            <option value="Type1">Type1</option>
            <option value="Type2">Type2</option>
          </select>
        </label>
      </div>

      <div className="products-section">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>
              <FaShoppingCart /> Add to Cart
            </button>
            <button onClick={() => addToWishlist(product)}>
              <FaHeart /> Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CombinedComponent;
