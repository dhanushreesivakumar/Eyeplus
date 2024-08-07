import React, { useState } from 'react';
import Sidebar from '../Admin/Sidebar'; // Adjust the import path if necessary
import '../Admin/AddProductsPage.css';

const AddProductPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name: productName, price: productPrice, stock: productStock };

    if (editIndex >= 0) {
      // Edit existing product
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setEditIndex(-1);
    } else {
      // Add new product
      setProducts([...products, newProduct]);
    }

    // Reset the form
    setProductName('');
    setProductPrice('');
    setProductStock('');
  };

  const handleEdit = (index) => {
    const product = products[index];
    setProductName(product.name);
    setProductPrice(product.price);
    setProductStock(product.stock);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="add-product-container">
      <Sidebar />
      <div className="add-product-page">
        <div className="content">
          <h2>{editIndex >= 0 ? 'Edit Product' : 'Add New Product'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Product Price:</label>
              <input
                type="number"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="productStock">Product Stock:</label>
              <input
                type="number"
                id="productStock"
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
                required
              />
            </div>
            <button type="submit">{editIndex >= 0 ? 'Update Product' : 'Add Product'}</button>
          </form>

          {products.length > 0 && (
            <div className="table-container">
              <h3>Product List</h3>
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleRemove(index)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
