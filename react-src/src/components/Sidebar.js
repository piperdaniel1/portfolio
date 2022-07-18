import React from 'react';
import '../styles/Sidebar.css';
import {VscChromeClose} from 'react-icons/vsc'

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div class={isOpen ? 'side-header-bar active':'side-header-bar inactive'}>
      <div class="hamburger-wrapper">
        <div class={isOpen ? "sidebar-hamburger hamburger-icon inactive":"sidebar-hamburger hamburger-icon active"} 
             onClick={() => setIsOpen(!isOpen)}>
          <div class="hamburger-icon-line"></div>
          <div class="hamburger-icon-line"></div>
          <div class="hamburger-icon-line"></div>
        </div>

        <div class={isOpen ? "sidebar-hamburger-close active":"sidebar-hamburger-close inactive"}
             onClick={() => setIsOpen(!isOpen)}>
          <VscChromeClose/>
        </div>
      </div>

      <div class={isOpen ? 'sidebar-nav-buttons active':'sidebar-nav-buttons inactive'}>
        <div class="sidebar-nav-button">
          <p class="sidebar-nav-text-button"> Portfolio </p>
        </div>
        <div class="sidebar-nav-button">
          <p class="sidebar-nav-text-button"> About me </p>
        </div>
        <div class="sidebar-nav-button">
          <p class="sidebar-nav-text-button"> References </p>
        </div>
        <div class="sidebar-nav-button">
          <p class="sidebar-nav-text-button"> Contact </p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
