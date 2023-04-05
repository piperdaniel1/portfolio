import './Header.css'
import { FaFileDownload } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Header() {
  return (
    <div className="header-bar">
        <a className='site-title-bg' href='https://piperdaniel1.com'>
            <h1 className='header-site-title disable-select'>Daniel Piper</h1>
        </a>

        <div className="header-nav-buttons">
            <div className='header-nav-button'>
                <h2 className='header-nav-label disable-select'>Resume</h2>
                <FaFileDownload className='header-nav-icon'/>
            </div>
            <div className='header-nav-button'>
                <h2 className='header-nav-label disable-select'>Projects</h2>
            </div>
            <a className='header-nav-button' href='https://github.com/piperdaniel1' target='_blank'>
                <h2 className='header-nav-label disable-select'>Github</h2>
                <AiFillGithub className='header-nav-icon'/>
            </a>

            <a className='header-nav-button' href='https://www.linkedin.com/in/daniel-piper-b2a311223/' target='_blank'>
                <h2 className='header-nav-label disable-select'>Linkedin</h2>
                <AiFillLinkedin className='header-nav-icon'/>
            </a>

            <a className='primary-nav-button' href='mailto:piperdaniel1@gmail.com'>
                <h2 className='header-nav-label disable-select'>Email me</h2>
            </a>
        </div>
    </div>
  );
}