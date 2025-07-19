import React, { useState } from 'react';
import '../../styles/ZostelBookingInterface.css';

const ZostelBookingInterface = () => {
  const [selectedCategory, setSelectedCategory] = useState('ZOSTEL PLUS');
  const [searchValue, setSearchValue] = useState('');
  const [checkInDate, setCheckInDate] = useState('Sat 19 Jul');
  const [checkOutDate, setCheckOutDate] = useState('Sun 20 Jul');

  const categories = [
    { id: 'destinations', label: 'DESTINATIONS', type: 'top' },
    { id: 'zostel', label: 'ZOSTEL', type: 'top' },
    { id: 'zostel-plus', label: 'ZOSTEL PLUS', type: 'bottom' },
    { id: 'zostel-homes', label: 'ZOSTEL HOMES', type: 'bottom' },
    { id: 'zo-trips', label: 'ZO TRIPS', type: 'bottom-left' },
    { id: 'selections', label: 'SELECTIONS', type: 'bottom-right' }
  ];

  const handleCategorySelect = (categoryId, categoryLabel) => {
    setSelectedCategory(categoryLabel);
  };

  const handleBookNow = () => {
    console.log('Booking with:', {
      category: selectedCategory,
      search: searchValue,
      checkIn: checkInDate,
      checkOut: checkOutDate
    });
  };

  return (
    <div className="booking-container">
      <div className="booking-wrapper">
        <div className="category-grid">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-item ${selectedCategory === category.label ? 'selected' : ''}`}
              onClick={() => handleCategorySelect(category.id, category.label)}
            >
              {category.label}
              {selectedCategory === category.label && (
                 <span className={`check-icon ${selectedCategory === category.label ? 'selected' : ''}`}>
                ✓
              </span>
              )}
            </button>
          ))}
        </div>

        <div className="search-section">
          SEARCH YOUR {selectedCategory}
        </div>
        
        <input
          type="text"
          className="search-input"
          placeholder="eg. Manali, Jodhpur, Jaipur, etc."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className="date-section">
          <div className="date-group">
            <div className="date-label">CHECK IN</div>
            <input
              type="text"
              className="date-input"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="date-group">
            <div className="date-label">CHECK OUT</div>
            <input
              type="text"
              className="date-input"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
        </div>

        <button className="book-button" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ZostelBookingInterface;