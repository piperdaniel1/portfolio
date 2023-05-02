import reactLogo from '../sprites/react.png';
import nodeLogo from '../sprites/node.png';
import firebaseLogo from '../sprites/firebase.png';
import pythonLogo from '../sprites/python.png';
import rustLogo from '../sprites/rust.png';
import cppLogo from '../sprites/cpp.png';
import cLogo from '../sprites/c.png';
import kotlinLogo from '../sprites/kotlin.png';
import './TechBubble.css';

export default function TechBubble(props) {
  if (props.lang === 'react') {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://reactjs.org/'>
          <div className='react-tech-bubble'>
            <img className='tech-logo' src={reactLogo} alt='React Logo' />
            <p className='tech-name'>React</p>
          </div>
        </a>
      </div>
    )
  } else if (props.lang === 'node') {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://nodejs.org/en/about/'>
          <div className='node-tech-bubble'>
            <img className='tech-logo' src={nodeLogo} alt='Node Logo' />
            <p className='tech-name'>NodeJS</p>
          </div>
        </a>
      </div>
    )
  } else if (props.lang === 'firebase') {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://firebase.google.com/'>
          <div className='firebase-tech-bubble'>
            <img className='tech-logo' src={firebaseLogo} alt='Firebase Logo' />
            <p className='tech-name'>Firebase</p>
          </div>
        </a>
      </div>
    )
  } else if (props.lang === 'python') {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://www.python.org/'>
          <div className='python-tech-bubble'>
            <img className='tech-logo' src={pythonLogo} alt='Python Logo' />
            <p className='tech-name'>Python</p>
          </div>
        </a>
      </div>
    )
  } else if (props.lang === 'rust') {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://www.rust-lang.org/'>
          <div className='rust-tech-bubble'>
            <img className='tech-logo' src={rustLogo} alt='Rust Logo' />
            <p className='tech-name'>Rust</p>
          </div>
        </a>
      </div>
    )
  } else if (props.lang === 'cpp') {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://isocpp.org/'>
          <div className='cpp-tech-bubble'>
            <img className='tech-logo' src={cppLogo} alt='C++ Logo' />
            <p className='tech-name'>C++</p>
          </div>
        </a>
      </div>
    )
  } else if (props.lang === 'c') {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://en.wikipedia.org/wiki/C_(programming_language)'>
          <div className='c-tech-bubble'>
            <img className='tech-logo' src={cLogo} alt='C Logo' />
            <p className='tech-name'>C</p>
          </div>
        </a>
      </div>
    )
  } else if (props.lang === 'kotlin') {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://kotlinlang.org/'>
          <div className='kotlin-tech-bubble'>
            <img className='tech-logo' src={kotlinLogo} alt='Kotlin Logo' />
            <p className='tech-name'>Kotlin</p>
          </div>
        </a>
      </div>
    )
  } else {
    return (
      <div className='outer-tech-bubble'>
        <a className='tech-bubble-link' href='https://nodejs.org/en/about/'>
          <div className='node-tech-bubble'>
            <p className='tech-name'>{props.lang}</p>
          </div>
        </a>
      </div>
    )
  }
}
