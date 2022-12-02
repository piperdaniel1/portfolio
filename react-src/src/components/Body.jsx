import React from 'react';
import '../styles/Body.css';
import resume from '../sprites/Resume.pdf';
import portfolio from '../sprites/Portfolio.pdf';

function Header() {
  return (
    <div class="body-section">
      <div class="main-title-bar">
        <h1 class="main-title-text">About Me</h1>
        <p className='paragraph-text-block'>
          I'm a senior Computer Science college student at Oregon State University. My education has touched on all aspects of programming,
          but I have focused especially on Frontend and Backend web development. I have created multiple social networking sites for school
          and am now focused on creating a full stack web app to view home tempatures for my senior Capstone project.
        </p>
        <h1 class="main-title-text">Resume</h1>
        <p className='paragraph-text-block'>
          You can download the latest version of my resume&nbsp; 
          <a className='link-block' href={resume} download='resume.pdf'>here</a>.
        </p>
        <h1 class="main-title-text">Portfolio</h1>
        <p className='paragraph-text-block'>
          You can download the latest version of my portfolio&nbsp; 
          <a className='link-block' href={portfolio} download='portfolio.pdf'>here</a>.
        </p>
      </div>
    </div>
  );
}
export default Header;
