import React from 'react'
import zostelIcon from "../../assets/svg/zostel.svg";
import dropupIcon from "../../assets/svg/dropup.svg";
import dropdownIcon from "../../assets/svg/dropdown.svg";
import zostelplusImg from "../../assets/images/zosteldrop.png";

function ZostelComponent({isOpenZostel,closeOtherDropdowns,setIsOpenZostel,zostelLocations
    ,activeTab,setActiveTab,getColumnClass
}) {
  return (
     <div
                  className={`nav-item zostel-dropdown-wrapper ${
                    isOpenZostel ? "active" : ""
                  }`}
                  onMouseEnter={() => {
                    closeOtherDropdowns("zostel");
                    setIsOpenZostel(true);
                  }}
                  onMouseLeave={() => setIsOpenZostel(false)}
                >
                  <div className="nav-item-header">
                  <img
                    src={zostelIcon}
                    alt="homeIcon"
                    className="home-icon-large"
                  />
                  <div className="homes-label">Zostel</div>
                  
                  <img
                    src={isOpenZostel ? dropupIcon : dropdownIcon}
                    alt={isOpenZostel ? "dropup-icon" : "dropdown-icon"}
                    className={`icon-transition ${
                      isOpenZostel
                        ? "dropup-icon-zostel-plus"
                        : "dropdown-icon-zostel-plus"
                    }`}
                  />
                  </div>
                  {isOpenZostel && (
                    <div className="zostel-dropdown">
                      {/* <div className="left-section">
                      <img
                        src={zostelplusImg}
                        alt="Zostel Cover"
                        className="preview-image"
                      />
                      <p className="description">
                        Vibrant backpacker hostels for a social, eventful getaway
                      </p>
                      <button className="see-all-button">See All</button>
                    </div> */}
                      <div className="homes-left">
                        <img
                          src={zostelplusImg}
                          alt="Trips preview"
                          className="homes-image"
                        />
                        <p className="homes-desc">
                          Vibrant backpacker hostels for a social, eventful getaway
                        </p>
                        <button className="see-all-btn">See All</button>
                      </div>
                      <div className="homes-right">
                        <div className="homes-tabs">
                          {Object.keys(zostelLocations).map((region) => (
                            <button
                              key={region}
                              className={`tab-btn ${
                                activeTab === region ? "active" : ""
                              }`}
                              onClick={() => setActiveTab(region)}
                            >
                              {region}
                            </button>
                          ))}
                        </div>
    
                        <div className="homes-list">
                          <ul
                            className={getColumnClass(
                              zostelLocations[activeTab].length
                            )}
                          >
                            {zostelLocations[activeTab].map((place, index) => (
                              <li key={index}>{place}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
  )
}

export default ZostelComponent