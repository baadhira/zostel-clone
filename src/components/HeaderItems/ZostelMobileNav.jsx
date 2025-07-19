import React, { useState, useEffect } from "react";
import "../../styles/ZostelMobileNav.css";
import dropdownIcon from "../../assets/svg/dropdown.svg";
import dropupIcon from "../../assets/svg/dropup.svg";
import zostelIcon from "../../assets/svg/zostel.svg";
import closeIcon from "../../assets/images/close.png";
import zoTrips from "../../assets/svg/zotrips.svg";
import zostelplusIcon from "../../assets/svg/zostelplusIcon.svg";
import whiteIcon from "../../assets/svg/whitezostel.svg";
import zostelHeader from '../../assets/images/zostelheadericon.png'
import homeIcon from "../../assets/svg/home.svg";
import zoSelect from '../../assets/images/zoselectionsicon.png'
const ZostelMobileNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Changed to track only one expanded section at a time
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSidebar = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    
    // Prevent body scroll when sidebar is open
    if (newState) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };

  // Cleanup effect to remove body class on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, []);

  const toggleSection = (section) => {
    // If clicking the same section that's already expanded, close it
    // If clicking a different section, expand that one and close others
    setExpandedSection(prev => prev === section ? null : section);
  };

  // Navigation sections data
  const navigationSections = [
    {
      id: 'zostel',
      title: 'Zostel',
      icon: zostelIcon,
      isImage: true,
      locations: [
        "Zostel Agra",
        "Zostel Alleppey",
        "Zostel Aurangabad",
        "Zostel Bangalore",
        "Zostel Delhi",
        "Zostel Goa",
        "Zostel Hampi",
        "Zostel Jaipur",
        "Zostel Jodhpur",
        "Zostel Kasol",
        "Zostel Manali",
        "Zostel Mumbai",
        "Zostel Pushkar",
        "Zostel Rishikesh",
        "Zostel Udaipur",
        "Zostel Varanasi"
      ]
    },
    {
      id: 'zostelPlus',
      title: 'Zostel Plus',
      icon: zostelplusIcon,
      locations: [
        "Zostel Plus Bir",
        "Zostel Plus Kareri",
        "Zostel Plus Lonavala",
        "Zostel Plus Mussoorie (Kempty)",
        "Zostel Plus Nainital (Naina Range)",
        "Zostel Plus Panchgani",
        "Zostel Plus Rishikesh (Mohanchatti)",
        "Zostel Plus Wayanad",
      ]
    },
    {
      id: 'homes',
      title: 'Homes',
      icon: homeIcon,
      locations: [
        "Zostel Homes Goa",
        "Zostel Homes Manali",
        "Zostel Homes Rishikesh",
        "Zostel Homes Kasol",
        "Zostel Homes Pushkar",
        "Zostel Homes Jaipur",
        "Zostel Homes Udaipur",
        "Zostel Homes Mumbai"
      ]
    },
    {
      id: 'zoTrips',
      title: 'Zo Trips',
      icon: zoTrips,
      locations: [
        "Himalayan Adventure",
        "Rajasthan Heritage Tour",
        "Goa Beach Experience",
        "Kerala Backwaters",
        "Ladakh Expedition",
        "Northeast Explorer",
        "South India Temple Trail",
        "Desert Safari Rajasthan"
      ]
    }
  ];

  // Additional menu items (non-expandable)
  const additionalMenuItems = [
    {
      id: 'zoSelections',
      title: 'Zo Selections',
      icon: zoSelect,
      isImage:true,
      isNew: true
    },
    {
      id: 'destinations',
      title: 'Destinations',
      icon: '🗺️',
    },
    {
      id: 'workWithUs',
      title: 'Work with us',
      icon: '🤝'
    },
    {
      id: 'openFranchise',
      title: 'Open Franchise',
      icon: '💼'
    }
  ];

  // Simple menu item component for non-expandable items
  const SimpleMenuItem = ({ item }) => (
    <div className="zostel-nav-section">
      <div className="zostel-simple-menu-item">
        <div className="zostel-nav-left">
          {/* zoSelect */}
          {item.isImage?<img src={zoSelect}/>:<span className="zostel-simple-icon">{item.icon}</span>}
          
          <span className="zostel-nav-left-title">{item.title}</span>
          {item.isNew && <span className="zostel-new-badge">NEW</span>}
        </div>
      </div>
    </div>
  );
  const NavigationSection = ({ section }) => (
    <div className="zostel-nav-section">
      <button
        onClick={() => toggleSection(section.id)}
        className="zostel-nav-button"
      >
        <div className="zostel-nav-left">
         <img src={section.icon} className="zostel-icon-mobile" alt={`${section.title} icon`} />
          <span className="zostel-nav-left-title">{section.title}</span>
        </div>
        <img 
          src={expandedSection === section.id ? dropupIcon : dropdownIcon} 
          alt="toggle icon"
        />
      </button>

      <div
        className={`zostel-submenu ${
          expandedSection === section.id ? "expanded" : ""
        }`}
      >
        {section.locations.map((location, index) => (
          <div key={index} className="zostel-submenu-item">
            {location}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="zostel-container mobile-nav">
      <header className="zostel-header">
        <div className="zostel-header-left">
          <div className="zostel-logo">
            <img src={zostelHeader} alt="homeIcon" className="header-icon-large" />
            {/* <span className="zostel-logo-text">ZOSTEL</span> */}
          </div>
        </div>
        <div className="zostel-header-right">
          {!sidebarOpen && <button className="zostel-login-btn">Login</button>}
          <div
            className={sidebarOpen ? "zostel-close-button" : "zostel-menu-dots"}
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <img src={closeIcon} className="close-icon-mobile" alt="close" />
            ) : (
              <>
                <span className="zostel-dot"></span>
                <span className="zostel-dot"></span>
                <span className="zostel-dot"></span>
                <span className="zostel-dot"></span>
              </>
            )}
          </div>
        </div>
      </header>

      {sidebarOpen && (
        <div className="zostel-overlay" onClick={toggleSidebar}></div>
      )}

      <div className={`zostel-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="zostel-sidebar-content">
          {navigationSections.map((section) => (
            <NavigationSection key={section.id} section={section} />
          ))}
          
          {/* Horizontal divider after navigation sections */}
          <hr className="zostel-horizontal-divider" />
          
          {/* Additional menu items */}
          {additionalMenuItems.map((item) => (
            <SimpleMenuItem key={item.id} item={item} />
          ))}
          
          <div className="zostel-app-section">
            <div className="zostel-app-card">
              <div className="zostel-app-content">
                <div className="zostel-app-icon"><img src={whiteIcon} className="white-zostel-icon"/></div>
                <div className="zostel-app-info">
                  <div className="zostel-app-title">Download Zostel App</div>
                  <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                  <div className="zostel-app-stats">2M Zostelers • 4.5/5</div>
                  <div className="zostel-stars">
                    <span className="filled">★</span>
                    <span className="filled">★</span>
                    <span className="filled">★</span>
                    <span className="filled">★</span>
                    <span className="empty">★</span>
                  </div>
                  </div>
                </div>
                <button className="zostel-get-app-btn">Get App</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 750px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ZostelMobileNav;