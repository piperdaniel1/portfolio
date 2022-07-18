import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
    }
  }, [isOpen]);

  return (
    <div class={isOpen ? 'side-header-bar active':'side-header-bar inactive'}>
      <div class="hamburger-wrapper">
        <div class="sidebar-hamburger hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
          <div class="hamburger-icon-line"></div>
          <div class="hamburger-icon-line"></div>
          <div class="hamburger-icon-line"></div>
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
