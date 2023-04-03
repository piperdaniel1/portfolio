import React from 'react';
import '../styles/Sidebar.css';
import {VscChromeClose} from 'react-icons/vsc'

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={isOpen ? 'side-header-bar active':'side-header-bar inactive'}>
      <div className="hamburger-wrapper">
        <div className={isOpen ? "sidebar-hamburger hamburger-icon inactive":"sidebar-hamburger hamburger-icon active"} 
             onClick={() => setIsOpen(!isOpen)}>
          <div className="hamburger-icon-line"></div>
          <div className="hamburger-icon-line"></div>
          <div className="hamburger-icon-line"></div>
        </div>

        <div className={isOpen ? "sidebar-hamburger-close active":"sidebar-hamburger-close inactive"}
             onClick={() => setIsOpen(!isOpen)}>
          <VscChromeClose/>
        </div>
      </div>

      <div className={isOpen ? 'sidebar-nav-buttons active':'sidebar-nav-buttons inactive'}>
        <div className="sidebar-nav-button">
          <p className="sidebar-nav-text-button"> Portfolio </p>
        </div>
        <div className="sidebar-nav-button">
          <p className="sidebar-nav-text-button"> About me </p>
        </div>
        <div className="sidebar-nav-button">
          <p className="sidebar-nav-text-button"> References </p>
        </div>
        <div className="sidebar-nav-button">
          <p className="sidebar-nav-text-button"> Contact </p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
