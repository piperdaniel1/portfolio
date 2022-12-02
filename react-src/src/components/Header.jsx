import React from 'react';
import '../styles/Header.css';
import logo from '../sprites/profile-photo.jpeg';

function Header() {
  return (
    <div class="top-header-bar">
      <div class='header-logo-div'>
        <img class='header-logo-image' src={logo} alt="logo" />
        <div className='page-title'>
          <h1 class='header-name'>Daniel Piper</h1>
          <h2 class='header-description'>Full Stack Web Development</h2>
        </div>
      </div>
      <a href="mailto:piperdaniel1@gmail.com"><button class="header-contact-button">Contact Me</button></a>
    </div>
  );
}
export default Header;
