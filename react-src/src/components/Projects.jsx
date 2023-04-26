import Header from './Header';
import { useState } from 'react';
import ChessAI from './project-details/ChessAI';
import DiscordBot from './project-details/DiscordBot';
import CircleSelector from './project-details/CircleSelector';
import './Projects.css'
import { Link } from 'react-router-dom';

export default function Projects() {
    const [project, setProject] = useState('Chess Bot')

    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>

            <CircleSelector selected={project} setSelected={setProject} />

            <Link to={'/projects/all'} className='all-projects-link'>
                <div className='project-disclaimer-wrapper'>
                    <p className='project-disclaimer'>
                        These are three personal projects that I think showcase my skills the best.
                        If you want to see every major project I have worked on, <span className='disclaimer-inline-link'>click here.</span>
                    </p>
                </div>
            </Link>

            <div className='projects-section-wrapper'>
                {project === 'Chess Bot' ? <ChessAI /> : null}
                {project === 'Discord Bot' ? <DiscordBot /> : null}
                {project === 'Wordle Bot' ? null : null}
            </div>
        </div>
    )
}
