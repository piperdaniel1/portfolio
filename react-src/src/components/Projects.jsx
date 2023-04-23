import Header from './Header';
import { useState } from 'react';
import ChessAI from './project-details/ChessAI';
import DiscordBot from './project-details/DiscordBot';
import CircleSelector from './project-details/CircleSelector';

export default function Projects() {
    const [project, setProject] = useState('chess-ai')

    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>

            <CircleSelector selected={project} setSelected={setProject} />

            <ul className='paragraph-text-block' style={{
                color: '#fff',
                fontSize: '30px',
                fontFamily: "'Roboto', sans-serif",
            }}>
                {project === 'Chess Bot' ? <ChessAI /> : null}
                {project === 'Discord Bot' ? <DiscordBot /> : null}
                {project === 'Wordle Bot' ?  null : null}
            </ul>
        </div>
    )
}