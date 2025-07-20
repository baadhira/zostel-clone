import zostelplusImg from "../../assets/images/zostelplusdrop.png";
import dropdownIcon from "../../assets/svg/dropdown.svg";
import dropupIcon from "../../assets/svg/dropup.svg";
import zostelplusIcon from "../../assets/svg/zostelplusicon.svg";
import {
    homesData,
    zostelPlusData
} from "../../resources/navigationData";
function ZostelPlusHeader({isZostelPlusIsOpen,closeOtherDropdowns,setZostelPlusIsOpen,activeTab,setActiveTab,getColumnClass}) {
  return (
    
              <div
                className={`nav-item zostel-plus-dropdown-wrapper ${
                  isZostelPlusIsOpen ? "active" : ""
                }`}
                onMouseEnter={() => {
                  closeOtherDropdowns("plus");
                  setZostelPlusIsOpen(true);
                }}
                onMouseLeave={() => setZostelPlusIsOpen(false)}
              >
                <div className="nav-item-header">
                <img
                  src={zostelplusIcon}
                  alt="homeIcon"
                  className="home-icon-large"
                />
               <div className="zostel-plus-label">Zostel Plus</div>
                <img
                  src={isZostelPlusIsOpen ? dropupIcon : dropdownIcon}
                  alt={isZostelPlusIsOpen ? "dropup-icon" : "dropdown-icon"}
                  className={`icon-transition ${
                    isZostelPlusIsOpen
                      ? "dropup-icon-zostel-plus"
                      : "dropdown-icon-zostel-plus"
                  }`}
                />
                </div>
                {isZostelPlusIsOpen && (
                  <div className="zostel-plus-dropdown">
                    <div className="left-section-zostel-plus">
                      <img
                        src={zostelplusImg}
                        alt="Zostel Plus"
                        className="preview-image-zostel-plus"
                      />
                      <p className="description-zostel-plus">
                        Premium hostels with aesthetic spaces and curated
                        experiences
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
                        <ul
                          className={getColumnClass(
                            zostelPlusData[activeTab].length
                          )}
                        >
                          {zostelPlusData[activeTab].map((place, index) => (
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

export default ZostelPlusHeader