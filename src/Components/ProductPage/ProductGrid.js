import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToCart }) => (
  <div className="product-section">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductGrid;
