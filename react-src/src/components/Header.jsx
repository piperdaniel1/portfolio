import './Header.css'

export default function Header() {
  return (
    <div className="header-bar">
        <a className='site-title-bg' href='https://piperdaniel1.com'>
            <h1 className='header-site-title disable-select'>Daniel Piper</h1>
        </a>

        <div className="header-nav-buttons">
            <div className='header-nav-button'>
                <h2 className='header-nav-label disable-select'>Resume</h2>
            </div>
            <div className='header-nav-button'>
                <h2 className='header-nav-label disable-select'>Projects</h2>
            </div>
            <div className='primary-nav-button'>
                <h2 className='header-nav-label disable-select'>Contact me</h2>
            </div>
        </div>
    </div>
  );
}