import React, { useState } from 'react';
import { products as initialProducts } from './products';
import FilterComponent from './FilterComponent';
import ProductGrid from './ProductGrid';
import './style.css';
import Navbar from '../Navbar/navbar';

const MainComponent = () => {
  
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

  const filteredProducts = initialProducts.filter((product) => {
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

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <FilterComponent filters={filters} setFilters={setFilters} />
      <ProductGrid products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default MainComponent;
