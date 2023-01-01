import React from 'react';
import '../styles/Body.css';
import resume from '../sprites/Resume.pdf';
import portfolio from '../sprites/Portfolio.pdf';
import headshot from '../sprites/daniel2.jpg';

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
          <img className='main-body-image' src={headshot} alt='Profile Pic' style={{
            width: '250px',
            borderRadius: '35%',
            marginRight: '25px',
          }} />

          <div className='brief-info'>
            <h1 class="main-title-text" style={{
              color: '#fff',
              fontSize: '50px',
              fontFamily: "'Roboto', sans-serif",
            }}>Hey, I'm Daniel Piper.</h1>

            <h1 class="secondary-title-text" style={{
              color: '#fff',
              fontSize: '40px',
              fontFamily: "'Roboto', sans-serif",
            }}>Full Stack Web Developer</h1>
          </div>
        </div>

        <div className='main-body-text' style={{
          width: '65%',
          textAlign: 'left',
          marginTop: '25px',
        }}>
          <div className='current-plans-section'>
            <h2 style={{
              color: '#fff',
              fontSize: '35px',
              fontFamily: "'Roboto', sans-serif",
              marginBottom: '20px',
            }}>Current Plans</h2>

            <p className='paragraph-text-block' style={{
              color: '#fff',
              fontSize: '30px',
              fontFamily: "'Roboto', sans-serif",
            }}>
              I'm a senior Computer Science student at Oregon State University. My education has touched on all aspects of programming,
              but I have focused especially on Frontend and Backend web development. I have created multiple social networking sites for school
              and am now focused on creating a full stack web app to view home tempatures for my senior Capstone project.
            </p>
          </div>

          <div className='work-experience-section'>
            <h2 style={{
              color: '#fff',
              fontSize: '35px',
              fontFamily: "'Roboto', sans-serif",
              marginTop: '55px',
              marginBottom: '20px',
            }}>Work Experience</h2>

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
            <h2 style={{
              color: '#fff',
              fontSize: '35px',
              fontFamily: "'Roboto', sans-serif",
              marginTop: '55px',
              marginBottom: '20px',
            }}>Notable Projects</h2>

            <ul className='paragraph-text-block' style={{
              color: '#fff',
              fontSize: '30px',
              fontFamily: "'Roboto', sans-serif",
            }}>
              <li>Online Chess AI
                  <br />
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

        </div>

        {/* <p className='paragraph-text-block'>
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
        </p> */}
      </div>
    </div>
  );
}
export default Header;
