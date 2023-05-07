import reactLogo from '../sprites/react.png';
import nodeLogo from '../sprites/node.png';
import firebaseLogo from '../sprites/firebase.png';
import pythonLogo from '../sprites/python.png';
import rustLogo from '../sprites/rust.png';
import cppLogo from '../sprites/cpp.png';
import cLogo from '../sprites/c.png';
import kotlinLogo from '../sprites/kotlin.png';
import javascriptLogo from '../sprites/javascript.png';
import './TechBubble.css';

let techDb = {
    'react': {
        logo: reactLogo,
        name: 'React',
        link: 'https://reactjs.org/'
    },
    'node': {
        logo: nodeLogo,
        name: 'NodeJS',
        link: 'https://nodejs.org/en/about/'
    },
    'firebase': {
        logo: firebaseLogo,
        name: 'Firebase',
        link: 'https://firebase.google.com/'
    },
    'python': {
        logo: pythonLogo,
        name: 'Python',
        link: 'https://www.python.org/'
    },
    'rust': {
        logo: rustLogo,
        name: 'Rust',
        link: 'https://www.rust-lang.org/'
    },
    'cpp': {
        logo: cppLogo,
        name: 'C++',
        link: 'https://isocpp.org/'
    },
    'c': {
        logo: cLogo,
        name: 'C',
        link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    'kotlin': {
        logo: kotlinLogo,
        name: 'Kotlin',
        link: 'https://kotlinlang.org/'
    },
    'javascript': {
        logo: javascriptLogo,
        name: 'JavaScript',
        link: 'https://www.javascript.com/'
    }
};

export default function TechBubble(props) {
    const tech = techDb[props.lang];

    if (!tech) {
        return (
            <div className='outer-tech-bubble'>
                <div className='tech-bubble-link'>
                    <div className='node-tech-bubble'>
                        <p className='tech-name'>{props.lang}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='outer-tech-bubble'>
            <a className='tech-bubble-link' href={tech.link}>
                <div className='node-tech-bubble'>
                    <img className='tech-logo' src={tech.logo} alt={`${tech.name} Logo`} />
                    <p className='tech-name'>{tech.name}</p>
                </div>
            </a>
        </div>
    );
}
