import Header from './Header';
import { useState } from 'react';
import ChessAI from './project-details/ChessAI';
import DiscordBot from './project-details/DiscordBot';
import CircleSelector from './project-details/CircleSelector';
import './Projects.css'

export default function Projects() {
    const [project, setProject] = useState('Chess Bot')

    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>

            <CircleSelector selected={project} setSelected={setProject} />

            <div className='paragraph-text-block'>
                {project === 'Chess Bot' ? <ChessAI /> : null}
                {project === 'Discord Bot' ? <DiscordBot /> : null}
                {project === 'Wordle Bot' ?  null : null}
            </div>
        </div>
    )
}
