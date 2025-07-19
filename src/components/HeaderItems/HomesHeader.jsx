import homeDropImg from "../../assets/images/homeDropImg.png";
import dropdownIcon from "../../assets/svg/dropdown.svg";
import dropupIcon from "../../assets/svg/dropup.svg";
import homeIcon from "../../assets/svg/home.svg";
import {
    homesData
} from "../../resources/navigationData";
function HomesHeader({showDropdownHomes,closeOtherDropdowns,setShowDropdownHomes,activeTab,setActiveTab,getColumnClass}) {
  return (
      <div
                className={`nav-item homes-wrapper ${
                  showDropdownHomes ? "active" : ""
                }`}
                onMouseEnter={() => {
                  closeOtherDropdowns("homes");
                  setShowDropdownHomes(true);
                }}
                onMouseLeave={() => setShowDropdownHomes(false)}
              >
                <img src={homeIcon} alt="homeIcon" className="home-icon-large" />
                Homes
                <img
                  src={showDropdownHomes ? dropupIcon : dropdownIcon}
                  alt={showDropdownHomes ? "dropup-icon" : "dropdown-icon"}
                  className={`icon-transition ${
                    showDropdownHomes ? "dropup-icon-home" : "dropdown-icon-home"
                  }`}
                />
                {showDropdownHomes && (
                  <div className="homes-dropdown">
                    <div className="homes-left">
                      <img
                        src={homeDropImg}
                        alt="Trips preview"
                        className="homes-image"
                      />
                      <p className="homes-desc">
                        Family friendly home stays, villas & more, for a private,
                        offbeat escape
                      </p>
                      <button className="see-all-btn">See All</button>
                    </div>
    
                    <div className="homes-right">
                      <div className="homes-tabs">
                        {Object.keys(homesData).map((region) => (
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
                        <ul className={getColumnClass(homesData[activeTab].length)}>
                          {homesData[activeTab].map((place, index) => (
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

export default HomesHeader