import Header from './Header';
import { useState, useEffect } from 'react';
import ChessAI from './project-details/ChessAI';
import DiscordBot from './project-details/DiscordBot';
import WordleBot from './project-details/WordleBot';
import CircleSelector from './project-details/CircleSelector';
import './Projects.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Projects() {
    const [project, setProject] = useState('Wordle Bot')
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project]);

    useEffect(() => {
        if (id) {
            let idNum = parseInt(id)
            if (idNum === 1 && project !== 'Discord Bot') {
                console.log('set to discord')
                setProject('Discord Bot')
            } else if (idNum === 2 && project !== 'Wordle Bot') {
                console.log('set to wordle')
                setProject('Wordle Bot')
            } else if (idNum === 3 && project !== 'Chess Bot') {
                console.log('set to chess')
                setProject('Chess Bot')
            }
        }
    }, [])

    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>

            <CircleSelector selected={project} setSelected={(newVal) => {
                setProject(newVal)
            }} />

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
                {project === 'Wordle Bot' ? <WordleBot /> : null}
            </div>
            <br />
        </div>
    )
}
