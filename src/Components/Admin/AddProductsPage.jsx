import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Admin/Sidebar';
import '../Admin/AddProductsPage.css';

const AddProductPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productImg, setProductImg] = useState('');
  const [color, setColor] = useState('');
  const [frameSize, setFrameSize] = useState('');
  const [gender, setGender] = useState('');
  const [frameShape, setFrameShape] = useState('');
  const [material, setMaterial] = useState('');
  const [frameWidth, setFrameWidth] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [weightGroup, setWeightGroup] = useState('');
  const [prescriptionType, setPrescriptionType] = useState('');
  const [supportedPowers, setSupportedPowers] = useState('');
  const [collection, setCollection] = useState('');
  const [glassColor, setGlassColor] = useState('');
  const [subCollection, setSubCollection] = useState('');
  const [frameWidthValue, setFrameWidthValue] = useState('');
  const [productType, setProductType] = useState('');
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      stock: productStock,
      img: productImg,
      color:color,
      frameSize:frameSize,
      gender:gender,
      frameShape:frameShape,
      material:material,
      frameWidth:frameWidth,
      ageGroup:ageGroup,
      weightGroup:weightGroup,
      prescriptionType:prescriptionType,
      supportedPowers:supportedPowers,
      collection:collection,
      glassColor:glassColor,
      subCollection:subCollection,
      frameWidthValue:frameWidthValue,
      productType:productType
    };

    if (editIndex >= 0) {
      try {
        await axios.put(`http://localhost:9001/api/products/${editId}`, newProduct);
        fetchProducts();
        setEditIndex(-1);
        setEditId(null);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      try {
        const response = await axios.post('http://localhost:9001/api/products', newProduct);
        setProducts([...products, response.data]);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }

    // Clear form fields
    setProductName('');
    setProductPrice('');
    setProductStock('');
    setProductImg('');
    setColor('');
    setFrameSize('');
    setGender('');
    setFrameShape('');
    setMaterial('');
    setFrameWidth('');
    setAgeGroup('');
    setWeightGroup('');
    setPrescriptionType('');
    setSupportedPowers('');
    setCollection('');
    setGlassColor('');
    setSubCollection('');
    setFrameWidthValue('');
    setProductType('');
  };

  const handleEdit = (index) => {
    const product = products[index];
    setProductName(product.name);
    setProductPrice(product.price);
    setProductStock(product.stock);
    setProductImg(product.img);
    setColor(product.color);
    setFrameSize(product.frameSize);
    setGender(product.gender);
    setFrameShape(product.frameShape);
    setMaterial(product.material);
    setFrameWidth(product.frameWidth);
    setAgeGroup(product.ageGroup);
    setWeightGroup(product.weightGroup);
    setPrescriptionType(product.prescriptionType);
    setSupportedPowers(product.supportedPowers);
    setCollection(product.collection);
    setGlassColor(product.glassColor);
    setSubCollection(product.subCollection);
    setFrameWidthValue(product.frameWidthValue);
    setProductType(product.productType);
    setEditIndex(index);
    setEditId(product.id);
  };

  const handleRemove = async (index) => {
    const product = products[index];
    try {
      await axios.delete(`http://localhost:9001/api/products/${product.id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
            <div className="form-group">
              <label htmlFor="productImg">Product Image URL:</label>
              <input
                type="text"
                id="productImg"
                value={productImg}
                onChange={(e) => setProductImg(e.target.value)}
                required
              />
            </div>

            {/* Additional Form Fields */}
            <div className="form-group">
              <label htmlFor="color">Color:</label>
              <input
                type="text"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="frameSize">Frame Size:</label>
              <input
                type="text"
                id="frameSize"
                value={frameSize}
                onChange={(e) => setFrameSize(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="frameShape">Frame Shape:</label>
              <input
                type="text"
                id="frameShape"
                value={frameShape}
                onChange={(e) => setFrameShape(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="material">Material:</label>
              <input
                type="text"
                id="material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="frameWidth">Frame Width:</label>
              <input
                type="text"
                id="frameWidth"
                value={frameWidth}
                onChange={(e) => setFrameWidth(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ageGroup">Age Group:</label>
              <input
                type="text"
                id="ageGroup"
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="weightGroup">Weight Group:</label>
              <input
                type="text"
                id="weightGroup"
                value={weightGroup}
                onChange={(e) => setWeightGroup(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prescriptionType">Prescription Type:</label>
              <input
                type="text"
                id="prescriptionType"
                value={prescriptionType}
                onChange={(e) => setPrescriptionType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="supportedPowers">Supported Powers:</label>
              <input
                type="text"
                id="supportedPowers"
                value={supportedPowers}
                onChange={(e) => setSupportedPowers(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="collection">Collection:</label>
              <input
                type="text"
                id="collection"
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="glassColor">Glass Color:</label>
              <input
                type="text"
                id="glassColor"
                value={glassColor}
                onChange={(e) => setGlassColor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subCollection">Sub-Collection:</label>
              <input
                type="text"
                id="subCollection"
                value={subCollection}
                onChange={(e) => setSubCollection(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="frameWidthValue">Frame Width Value:</label>
              <input
                type="text"
                id="frameWidthValue"
                value={frameWidthValue}
                onChange={(e) => setFrameWidthValue(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productType">Product Type:</label>
              <input
                type="text"
                id="productType"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              />
            </div>

            <button type="submit">
              {editIndex >= 0 ? 'Update Product' : 'Add Product'}
            </button>
          </form>

          {/* Product Table */}
          <div className="table-container">
            <h3>Product List</h3>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>₹{product.price}</td>
                    <td>{product.stock}</td>
                    <td><img src={product.img} alt={product.name} className="product-image" /></td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleRemove(index)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
