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
            <ul className='paragraph-text-block' style={{
                color: '#fff',
                fontSize: '30px',
                fontFamily: "'Roboto', sans-serif",
            }}>
                <CircleSelector />

                <ChessAI />

                <br />
                <br />

                <DiscordBot />
            </ul>
        </div>
    )
}