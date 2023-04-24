import React from 'react';
import '../styles/Body.css';
import coverPhoto from '../sprites/main-cover-photo.jpg';

function Header() {
  let innerExperienceStyle = {
      color: '#fff',
      fontSize: '24px',
      fontFamily: "'Roboto', sans-serif",
  }

  return (
    <div class="body-section">
      <div class="main-title-bar" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className='main-body-header'>
          <img className='main-body-image' src={coverPhoto} alt='Profile Pic' />

          <div className='brief-info'>
            <h1 class="main-title-text">Hey, I'm Daniel Piper.</h1>

            <h1 class="secondary-title-text">Full Stack Web Developer</h1>
          </div>
        </div>

        <div className='main-body-text'>
          <div className='current-plans-section'>
            <h2 className='section-header'>Current Plans</h2>

            <p className='paragraph-text-block' style={{
              color: '#fff',
              fontSize: '30px',
              fontFamily: "'Roboto', sans-serif",
            }}>
              I'm a senior Computer Science student at <a href='https://engineering.oregonstate.edu/EECS' rel='noreferrer' target='_blank' className='oregon-state-link'>Oregon State University</a>. My education has touched on all aspects of programming,
              but I have focused especially on Frontend and Backend web development. I have created multiple social networking sites for school
              and am now focused on creating a full stack web app to view home tempatures for my senior Capstone project.
            </p>
          </div>

          <div className='work-experience-section'>
            <h2 className='section-header'>Work Experience</h2>

            <ul className='paragraph-text-block' style={{
              color: '#fff',
              fontSize: '30px',
              fontFamily: "'Roboto', sans-serif",
            }}>
              <li>IT Technician - Oregon State University
                  <br />
                  <span style={innerExperienceStyle}>I worked on the frontend and backend of the College of Business tech stack.
                  My time at Oregon State helped me learn valuable communication skills interfacing with faculty and students, especially when designing and building
                  internal tools and scripts for the College of Business.</span>
              </li>
              <li>IT Technician - Oregon State University
                  <br />
                  <span style={innerExperienceStyle}>I worked on the frontend and backend of the College of Business tech stack.
                  My time at Oregon State helped me learn valuable communication skills interfacing with faculty and students, especially when designing and building
                  internal tools and scripts for the College of Business.</span>
              </li>
            </ul>
          </div>

          <div className='notable-projects-section'>
            <h2 className='section-header'>Notable Projects</h2>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
