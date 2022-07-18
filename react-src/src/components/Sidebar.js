import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
    }
  }, [isOpen]);

  return (
    <div class="side-header-bar">
      <div class="sidebar-hamburger hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        <div class="hamburger-icon-line"></div>
        <div class="hamburger-icon-line"></div>
        <div class="hamburger-icon-line"></div>
      </div>
    </div>
  );
}
export default Sidebar;
