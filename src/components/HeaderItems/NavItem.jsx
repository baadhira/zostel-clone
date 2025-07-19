import React from "react";

const NavItem = ({ onHover, icon, label, badge }) => {
  return (
    <div className="nav-item-header" onMouseEnter={onHover}>
      {icon && <img src={icon} className="zo-select-icon" alt="icon" />}{" "}
      {label}{" "}
      {badge && <span className="new-badge">{badge}</span>}
    </div>
  );
};

export default NavItem;
