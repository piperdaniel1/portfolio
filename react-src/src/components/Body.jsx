import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Body.css';
import coverPhoto from '../sprites/main-cover-photo.jpg';

function Body() {
    let innerExperienceStyle = {
        color: '#fff',
        fontSize: '24px',
        fontFamily: "'Roboto', sans-serif",
    }

    return (
        <div class="body-section">
            <div class="main-title-bar">
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

                        <p className='paragraph-text-block'>
                            I'm a senior Computer Science student at&nbsp;
                            <a href='https://engineering.oregonstate.edu/EECS' rel='noreferrer' target='_blank' className='oregon-state-link'>Oregon State University</a>.
                            My education has touched on all aspects of programming, but I have focused especially on Frontend and Backend web development.
                            I have created multiple social networking sites for school and am now focused on creating a full stack web app to view home tempatures
                            for my senior Capstone project.
                        </p>
                    </div>

                    <div className='work-experience-section'>
                        <h2 className='section-header'>Work Experience</h2>

                        <div className='paragraph-text-block'>
                            IT Technician - Oregon State University
                            <br />
                            <span style={innerExperienceStyle}>
                                I worked on the frontend and backend of the College of Business tech stack. I got experience with
                                many different technologies including Active Directory, Powershell, Azure, VMware, and others.
                                My time at Oregon State helped me learn valuable communication skills interfacing with faculty and students,
                                especially when designing and building internal tools and scripts for the College of Business.
                            </span>
                        </div>
                    </div>

                    <div className='notable-projects-section'>
                        <h2 className='section-header'>Notable Projects</h2>
                        <p className='paragraph-text-block'>
                            One of my favorite things about about studying programming at Oregon State is it has given me the
                            inspiration and skills to work on my own projects. I learned how to program in Basic years before
                            I went to college and since then programmed in Java and other languages before I started my studies.
                            However, my time at Oregon State helped me learn the skills (through classes and self study) to build
                            my own full stack web applications.
                        </p>
                        <p className='paragraph-text-block'>
                            During my time at university, I first learned Python and then expanded my skills to web development technologies
                            such as HTML, CSS, and JavaScript. As I progressed, I gained experience with SQL and NoSQL databases and explored
                            various web frameworks like Flask, Django, and Express.js. In my third year, I focused on frontend development using
                            popular JavaScript libraries and frameworks like React and Vue, enhancing my ability to create interactive and
                            responsive web applications. Additionally, I delved into mobile development, particularly Android, learning Kotlin as a
                            powerful alternative to Java for Android app development.
                        </p>
                        <p className='paragraph-text-block'>
                            Throughout my time at Oregon State, I worked on various projects, both individually and in teams. These projects not
                            only helped me hone my programming skills but also taught me valuable lessons about project management, collaboration,
                            and problem-solving. Some of the key projects I've worked on include&nbsp;
                            <Link to={'/projects/3'} className='inline-nav-link'>
                                 Ferric Fury (a Chess AI)
                            </Link>,&nbsp;
                            <Link to={'/projects/1'} className='inline-nav-link'>
                                Harlough (an AI-powered Discord Bot)
                            </Link>, and&nbsp;
                            <Link to={'/projects/2'} className='inline-nav-link'>
                                Friends of Wordle (an online Wordle social network)
                            </Link>.
                            These projects demonstrate my ability
                            to develop innovative solutions using a wide range of technologies.
                        </p>
                        <p className='paragraph-text-block'>
                            As I approach the end of my studies at Oregon State, I am excited to continue exploring new technologies and building creative
                            projects. I am confident that the skills and experiences I've gained during my time at the university will serve me well in
                            my future endeavors as a programmer and a software engineer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;
