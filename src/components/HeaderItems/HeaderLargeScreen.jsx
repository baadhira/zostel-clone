import { useState } from "react";
import search from "../../assets/images/search.png";
import zostel from "../../assets/images/zostell.png";
import "../../styles/Header.css";
import "../../styles/HomesDropdown.css";
import HomesHeader from "./HomesHeader";
import {
    zostelLocations
} from "../../resources/navigationData";
import NavItem from "./NavItem";
import ZostelComponent from "./ZostelComponent";
import "../../styles/ZostelDropdown.css";
import "../../styles/ZostelPlusDropdown.css";
import ZostelPlusHeader from "./ZostelPlusHeader";
import ZoTripsHeader from "./ZoTripsHeader";

function HeaderLargeScreen() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownHomes, setShowDropdownHomes] = useState(false);
  const [activeTab, setActiveTab] = useState("North");
  const [isZostelPlusIsOpen, setZostelPlusIsOpen] = useState(false);
  const [isOpenZostel, setIsOpenZostel] = useState(false);

  const closeOtherDropdowns = (keep = null) => {
    if (keep !== "homes") setShowDropdownHomes(false);
    if (keep !== "trips") setShowDropdown(false);
    if (keep !== "plus") setZostelPlusIsOpen(false);
    if (keep !== "zostel") setIsOpenZostel(false);
  };
  const getColumnClass = (itemCount) => {
    if (itemCount <= 8) return "js-single-column";
    if (itemCount <= 16) return "js-two-columns";
    return "js-three-columns";
  };
  return (
    <header className="header">
      <div className="header-top">
        <img src={zostel} alt="Zostel Logo" className="zostel-logo" />
        <div className="search-container-header">
          <img src={search} className="search-icon" />
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        <div>
          <div className="cta-buttons">
            <button className="get-app">📱 Get the App</button>
            <button className="login-header">Login</button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="nav-links">
          <ZostelComponent
            isOpenZostel={isOpenZostel}
            closeOtherDropdowns={closeOtherDropdowns}
            setIsOpenZostel={setIsOpenZostel}
            zostelLocations={zostelLocations}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            getColumnClass={getColumnClass}
          />

          <ZostelPlusHeader
            isZostelPlusIsOpen={isZostelPlusIsOpen}
            closeOtherDropdowns={closeOtherDropdowns}
            setZostelPlusIsOpen={setZostelPlusIsOpen}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            getColumnClass={getColumnClass}
          />

          <HomesHeader
            showDropdownHomes={showDropdownHomes}
            closeOtherDropdowns={closeOtherDropdowns}
            setShowDropdownHomes={setShowDropdownHomes}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            getColumnClass={getColumnClass}
          />

          <ZoTripsHeader
            showDropdown={showDropdown}
            closeOtherDropdowns={closeOtherDropdowns}
            setShowDropdown={setShowDropdown}
            getColumnClass={getColumnClass}
          />

          <NavItem
            onHover={closeOtherDropdowns}
            // icon={zoSelect}
            label="Zo Selections"
            badge="NEW"
            additionalClass='zo-selections'
          />
          <NavItem onHover={closeOtherDropdowns}icon={'🗺️ '} label="Destinations"additionalClass='destinations' />
        </div>
        <div className="header-right-navs">
          <NavItem onHover={closeOtherDropdowns} icon={'🤝 ' }label="Work with us"   additionalClass="work-with-us"/>
          <NavItem onHover={closeOtherDropdowns}icon={'💼 '} label="Open Franchise" additionalClass="open-franchise" />
        </div>
      </div>
    </header>
  );
}

export default HeaderLargeScreen;
