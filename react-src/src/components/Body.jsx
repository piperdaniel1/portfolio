import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Body.css';
import coverPhoto from '../sprites/daniel.jpg';
import inventOregon from '../sprites/deep_dive.jpg';
import capstone from '../sprites/capstone_group.jpg';

function Body() {
    return (
        <div class="body-section">
            <div class="main-title-bar">
                <div className='main-body-header'>
                    <div className='inner-main-body-header'>
                        <img className='main-body-image' src={coverPhoto} alt='Profile Pic' />

                        <div className='brief-info'>
                            <h1 class="main-title-text">Daniel Piper</h1>
                            <h1 class="secondary-title-text">Full Stack Web Developer</h1>
                        </div>
                    </div>
                </div>

                <div className='main-body-text'>
                    <div className='current-plans-section'>
                        <h2 className='section-header'>Current Plans</h2>

                        <p className='paragraph-text-block'>
                            As of June 2023, I have graduated from &nbsp;
                            <a href='https://engineering.oregonstate.edu/EECS' rel='noreferrer' target='_blank' className='oregon-state-link'>Oregon State University</a>&nbsp;
                            with a bachelor's degree in Computer Science. I'm now looking for backend and frontend
                            web development work, although my education has touched on many other aspects of programming.
                            For more information about my skills, check out my notable projects below!
                        </p>
                    </div>

                    {// <div className='work-experience-section'>
                        //     <h2 className='section-header'>Work Experience</h2>

                        //     <div className='paragraph-text-block'>
                        //         IT Technician - Oregon State University
                        //         <br />
                        //         <span style={innerExperienceStyle}>
                        //             I worked on the frontend and backend of the College of Business tech stack. I got experience with
                        //             many different technologies including Active Directory, Powershell, Azure, VMware, and others.
                        //             My time at Oregon State helped me learn valuable communication skills interfacing with faculty and students,
                        //             especially when designing and building internal tools and scripts for the College of Business.
                        //         </span>
                        //     </div>
                        // </div>
                    }

                    <div className='body-photo-section'>
                        <div className='body-photo-container'>
                            <img className='body-photo' src={inventOregon} alt='Invent Oregon' />
                            <p className='body-photo-caption'>Competing at Invent Oregon 2023 with Deep Dive Robotics.</p>
                        </div>
                    </div>

                    <div className='notable-projects-section'>
                        <h2 className='section-header'>Notable Projects</h2>
                        <p className='paragraph-text-block'>
                            One of the best aspects of studying programming at Oregon State is how I felt so inspired by the new
                            skills and knowledge to continue developing my own projects. Having started coding at age 9 I had
                            experience with Basic, Java, Lua, and C# before I went to college. As a self taught programmer, I worked extensively
                            on a high school robotics team (winning State and National recognition) and wrote numerous games for my own
                            entertainment. However, my time at Oregon State helped me expand my language competency and build more broadly
                            on my background (through classes and self study) to build full stack web applications.
                        </p>
                        <p className='paragraph-text-block'>
                            During my time at university, I first learned Python and then expanded my skills to web development technologies
                            such as HTML, CSS, and JavaScript. As I progressed, I gained experience with SQL and NoSQL databases and explored
                            various web frameworks like Flask, Django, and Express.js. In my third year, I focused on frontend development using
                            popular JavaScript libraries and frameworks like React and Vue, enhancing my ability to create interactive and
                            responsive web applications. Additionally, I delved into mobile development, particularly Android, learning Kotlin as a
                            powerful alternative to Java for Android app development.
                        </p>


                        <div className='body-photo-section'>
                            <div className='body-photo-container'>
                                <img className='body-photo' src={capstone} alt='Invent Oregon' />
                                <p className='body-photo-caption'>Me with my 2023 OSU Capstone expo group</p>
                            </div>
                        </div>
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
                            I am excited to continue exploring new
                            technologies and building creative projects. I am confident that the skills and experiences
                            I've gained during my time at the university will serve me well in my future endeavors as a
                            programmer and a software engineer.  I look forward to unleashing my creative energy into a
                            larger web ecosystem and being a part of a team to optimize its functionality and secure its success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;
