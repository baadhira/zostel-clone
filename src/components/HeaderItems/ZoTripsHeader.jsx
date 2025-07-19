import zoDropImg from "../../assets/images/zotripsdropimg.png";
import dropdownIcon from "../../assets/svg/dropdown.svg";
import dropupIcon from "../../assets/svg/dropup.svg";
import zoTrips from "../../assets/svg/zotrips.svg";
import {
    zotripDatas
} from "../../resources/navigationData";
function ZoTripsHeader({showDropdown,closeOtherDropdowns,setShowDropdown,getColumnClass}) {
  return (
     <div
                className={`nav-item dropdown-container ${
                  showDropdown ? "active" : ""
                }`}
                onMouseEnter={() => {
                  closeOtherDropdowns("trips");
                  setShowDropdown(true);
                }}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <img src={zoTrips} alt="homeIcon" className="home-icon-large" />
                Zo Trips
                <img
                  src={showDropdown ? dropupIcon : dropdownIcon}
                  alt={showDropdown ? "dropup-icon" : "dropdown-icon"}
                  className={`icon-transition-zotrips ${
                    showDropdown ? "dropup-icon-zotrips" : "dropdown-icon-zotrips"
                  }`}
                />
                {showDropdown && (
                  <div
                    className="dropdown-zotrips"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <div className="dropdown-zotrips-left">
                      {/* <div className="dropdown-image-zotrips"> */}
                      <img
                        src={zoDropImg}
                        alt="Trips preview"
                        className="zotrips-image"
                      />
                      <p className="dropdown-caption">
                        All-inclusive domestic and international tours with
                        handcrafted itineraries
                      </p>
                      <button className="see-all-btn">See All</button>
                      {/* </div> */}
                    </div>
    
                   
                    <div className="zotrips-list">
                      <ul className={getColumnClass(zotripDatas.length)}>
                        {zotripDatas.map((place, index) => (
                          <li key={index}>{place}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
  )
}

export default ZoTripsHeader