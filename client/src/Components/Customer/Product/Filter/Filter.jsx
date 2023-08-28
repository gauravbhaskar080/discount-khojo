import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30000);
  const [minDropdownOpen, setMinDropdownOpen] = useState(false);
  const [maxDropdownOpen, setMaxDropdownOpen] = useState(false);

  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
    setMinDropdownOpen(false);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
    setMaxDropdownOpen(false);
  };

  const getMinButtonText = () => {
    if (minPrice === 0) {
      return "Min";
    } else {
      return `₹${minPrice}`;
    }
  };

  const handleBrandChange = (brandName) => {
    const updatedBrands = selectedBrands.includes(brandName)
      ? selectedBrands.filter((brand) => brand !== brandName)
      : [...selectedBrands, brandName];
    setSelectedBrands(updatedBrands);
  };

  return (
    <div className="filter">
      <div className="heading">Filters</div>
      <hr />
      <div className="price">PRICE</div>
      <div className="buttons">
        <div className="dropdown">
          <button className="min-price" onClick={() => setMinDropdownOpen(!minDropdownOpen)}>
            {getMinButtonText()}
          </button>
          {minDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={() => handleMinPriceChange(0)}>0</button>
              <button onClick={() => handleMinPriceChange(5000)}>5000</button>
              <button onClick={() => handleMinPriceChange(10000)}>10000</button>
              <button onClick={() => handleMinPriceChange(15000)}>15000</button>
              <button onClick={() => handleMinPriceChange(20000)}>20000</button>
            </div>
          )}
        </div>
        <span className="to-gap">to</span>
        <div className="dropdown">
          <button className="max-price" onClick={() => setMaxDropdownOpen(!maxDropdownOpen)}>
            ₹{maxPrice === 30000 ? "30000+" : maxPrice}
          </button>
          {maxDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={() => handleMaxPriceChange(10000)}>10000</button>
              <button onClick={() => handleMaxPriceChange(15000)}>15000</button>
              <button onClick={() => handleMaxPriceChange(20000)}>20000</button>
              <button onClick={() => handleMaxPriceChange(30000)}>30000</button>
              <button onClick={() => handleMaxPriceChange(999999)}>30000+</button>
            </div>
          )}
        </div>
      </div>
      <hr />
      <div className="brand">
        <div className="brand-heading">BRAND</div>
        <div className="brand-options">
          <label>
            <input
              type="checkbox"
              checked={selectedBrands.includes("SAMSUNG")}
              onChange={() => handleBrandChange("SAMSUNG")}
            />
            SAMSUNG
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedBrands.includes("APPLE")}
              onChange={() => handleBrandChange("APPLE")}
            />
            APPLE
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedBrands.includes("OPPO")}
              onChange={() => handleBrandChange("OPPO")}
            />
            OPPO
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedBrands.includes("ONEPLUS")}
              onChange={() => handleBrandChange("ONEPLUS")}
            />
            ONEPLUS
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedBrands.includes("realme")}
              onChange={() => handleBrandChange("realme")}
            />
            realme
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedBrands.includes("POCO")}
              onChange={() => handleBrandChange("POCO")}
            />
            POCO
          </label>
          {/* Add more checkboxes for other brand names */}
        </div>
      </div>

    </div>
  );
};

export default Filter;
