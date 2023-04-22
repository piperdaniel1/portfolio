import './Header.css'
import { FaFileDownload } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import {HiCode} from 'react-icons/hi'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false)

    

    return (
        <div className="header-bar">
            <a className='site-title-bg' href='https://piperdaniel1.com'>
                <h1 className='header-site-title disable-select'>Daniel Piper</h1>
            </a>

            <div className={"mobile-header-nav-buttons " + (showDropdown ? 'shown' : 'hidden')}>
                <div className='header-nav-button m-one'>
                    <h2 className='header-nav-label disable-select'>Resume</h2>
                    <FaFileDownload className='header-nav-icon'/>
                </div>

                <Link to={'/projects'} className='header-nav-button m-two'>
                    <h2 className='header-nav-label disable-select'>Projects</h2>
                    <HiCode className='header-nav-icon'/>
                </Link>

                <a className='header-nav-button m-three' href='https://github.com/piperdaniel1' target='_blank'>
                    <h2 className='header-nav-label disable-select'>Github</h2>
                    <AiFillGithub className='header-nav-icon'/>
                </a>

                <a className='header-nav-button m-four' href='https://www.linkedin.com/in/daniel-piper-b2a311223/' target='_blank'>
                    <h2 className='header-nav-label disable-select'>Linkedin</h2>
                    <AiFillLinkedin className='header-nav-icon'/>
                </a>

                <a className='primary-nav-button m-five' href='mailto:piperdaniel1@gmail.com'>
                    <h2 className='header-nav-label disable-select'>Email me</h2>
                </a>
            </div>

            <div className="header-nav-buttons">
                <div className='header-nav-button one'>
                    <h2 className='header-nav-label disable-select'>Resume</h2>
                    <FaFileDownload className='header-nav-icon'/>
                </div>

                <Link to='/projects' className='header-nav-button two'>
                    <h2 className='header-nav-label disable-select'>Projects</h2>
                    <HiCode className='header-nav-icon' style={{fontSize: '58px'}}/>
                </Link>

                <a className='header-nav-button three' href='https://github.com/piperdaniel1' target='_blank'>
                    <h2 className='header-nav-label disable-select'>Github</h2>
                    <AiFillGithub className='header-nav-icon'/>
                </a>

                <a className='header-nav-button four' href='https://www.linkedin.com/in/daniel-piper-b2a311223/' target='_blank'>
                    <h2 className='header-nav-label disable-select'>Linkedin</h2>
                    <AiFillLinkedin className='header-nav-icon'/>
                </a>

                <a className='primary-nav-button five' href='mailto:piperdaniel1@gmail.com'>
                    <h2 className='header-nav-label disable-select'>Email me</h2>
                </a>
            </div>

            <button className={"mobile-nav-dropdown " + (showDropdown ? 'shown' : 'hidden')} onClick={() => {
                setShowDropdown(!showDropdown)
            }}>
                {
                    showDropdown ? 
                    <GrClose className='mobile-nav-icon' /> :
                    <GiHamburgerMenu className='mobile-nav-icon' />
                }
            </button>
        </div>
    );
}