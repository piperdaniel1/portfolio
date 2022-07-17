import React from 'react';
import '../styles/Header.css';
import logo from '../sprites/placeholder-logo.png';

function Header() {
  return (
    <div class="top-header-bar">
      <div class='header-logo-div'>
        <img class='header-logo-image' src={logo} alt="logo" />
        <h1 class='header-name'>Daniel Piper</h1>
      </div>
      <button class="header-contact-button">Contact me!</button>
    </div>
  );
}
export default Header;
