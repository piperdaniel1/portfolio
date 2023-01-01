import reactLogo from '../sprites/react.png';
import './TechBubble.css';

export default function TechBubble(props) {
  if (props.lang === 'react') {
    return (
      <div className='outer-tech-bubble'>
        <div className='react-tech-bubble'>
          <img className='react-tech-logo' src={reactLogo} alt='React Logo' />
          <p className='react-tech-name'>React</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='tech-bubble'>
        <p>{props.lang}</p>
      </div>
    )
  }
}