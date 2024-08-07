import React from 'react';

const FilterComponent = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="filter-section">
      <label>
        Brand:
        <select name="brand" onChange={handleFilterChange} value={filters.brand}>
          <option value="">All</option>
          <option value="Fastrack">Fastrack</option>
          <option value="Ray-Ban">Ray-Ban</option>
          <option value="Vogue">Vogue</option>
        </select>
      </label>
      <label>
        Category:
        <select name="category" onChange={handleFilterChange} value={filters.category}>
          <option value="">All</option>
          <option value="Full Rim">Full Rim</option>
          <option value="Half Rim">Half Rim</option>
          <option value="Rimless">Rimless</option>
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
          <option value="Round">Round</option>
          <option value="Oval">Oval</option>
          <option value="Square">Square</option>
        </select>
      </label>
      <label>
        Material:
        <select name="material" onChange={handleFilterChange} value={filters.material}>
          <option value="">All</option>
          <option value="Metal">Metal</option>
          <option value="Plastic">Plastic</option>
          <option value="Wood">Wood</option>
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
        <input type="text" name="supportedPowers" placeholder="e.g. -3.00 to +2.00" onChange={handleFilterChange} value={filters.supportedPowers} />
      </label>
      <label>
        Collection:
        <select name="collection" onChange={handleFilterChange} value={filters.collection}>
          <option value="">All</option>
          <option value="Classic">Classic</option>
          <option value="Modern">Modern</option>
          <option value="Sport">Sport</option>
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
        Sub-Collection:
        <select name="subCollection" onChange={handleFilterChange} value={filters.subCollection}>
          <option value="">All</option>
          <option value="Limited Edition">Limited Edition</option>
          <option value="Signature">Signature</option>
        </select>
      </label>
      <label>
        Frame Width:
        <input type="number" name="frameWidthValue" placeholder="e.g. 140mm" onChange={handleFilterChange} value={filters.frameWidthValue} />
      </label>
      <label>
        Product Type:
        <select name="productType" onChange={handleFilterChange} value={filters.productType}>
          <option value="">All</option>
          <option value="Eyeglasses">Eyeglasses</option>
          <option value="Sunglasses">Sunglasses</option>
          <option value="Computer Glasses">Computer Glasses</option>
        </select>
      </label>
    </div>
  );
};

export default FilterComponent;
