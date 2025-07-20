// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/HeroSection.css';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';

const tabConfig = {
  DESTINATIONS: 'Search your destination',
  ZOSTEL: 'Search your Zostel',
  'ZOSTEL PLUS': 'Search your Zostel Plus',
  'ZOSTEL HOMES': 'Search your Zostel Home',
  'ZO TRIPS': 'Search your Trip',
  SELECTIONS: 'Search your Selection',
};

const images = [img1, img2, img3, img4, img5];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('DESTINATIONS');
  const [searchValue, setSearchValue] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatDateForDisplay = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    };
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">Live it.Now</h1>

        <div className="tab-container">
          <ul className="tabs-hero">
            {Object.keys(tabConfig).map(tab => (
              <li
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          <div className="tab-content-grid">
            <div className="form-field search-field">
              <label className="field-label">{tabConfig[activeTab]}</label>
              <div className="search-container">
                <input
                  className="search-input"
                  type="text"
                  placeholder="eg. Manali, Jodhpur, Jaipur, etc."
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                />
                <div className="search-underline"></div>
              </div>
            </div>

            <div className="form-field date-field">
              <label className="field-label">Check In</label>
              <div className="search-container">
                <input
                  className="search-input date-default"
                  type="text"
                  placeholder="eg. Manali, Jodhpur, Jaipur, etc."
                  value={formatDateForDisplay(checkIn)}
                  onChange={e => setCheckIn(e.target.value)}
                />
                <div className="search-underline"></div>
              </div>
            </div>

            <div className="form-field date-field">
              <label className="field-label">Check Out</label>
              <div className="search-container">
                <input
                  className="search-input date-default"
                  type="text"
                  placeholder="eg. Manali, Jodhpur, Jaipur, etc."
                  value={formatDateForDisplay(checkIn)}
                  onChange={e => setCheckIn(e.target.value)}
                />
                <div className="search-underline"></div>
              </div>
            </div>

            <div className="form-field book-btn-container">
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;