import TechBubble from '../TechBubble';
import './WordleBot.css';

export default function WordleBot() {
    return (
        <div className='outer-project-wrapper'>
            <div className='project-header-wrapper'>
                <h1 className='section-header-text'>Wordle Bot</h1>
                <TechBubble lang='javascript' />
                <TechBubble lang='react' />
            </div>

            <div className='body-text-wrapper'>
                <span className='inner-experience-text'>
                    My chess AI is a testament to my skills as a backend software engineer. Written entirely
                    in Rust, it uses the minimax algorithm, along with a transposition table and alpha-beta
                    pruning, to increase search speed. Board evaluation is based on various factors such as
                    piece value and position, making it a formidable opponent for players of all skill levels.
                </span>

                <br />

                <span className='inner-experience-text'>
                    With over 5500 lines of Rust code, this is the third version of the AI. The first was
                    written in Python but proved to be too slow, while the second was written in C++, which
                    had its own challenges. Instead of rewriting that version, I took what I had learned and
                    created this third, stable version in Rust. The AI can operate as an engine server using TCP,
                    a chess CLI client, or a remote Lichess bot. To make it accessible to you on this site, I created a
                    Go HTTP web server that converts HTTP requests into TCP requests to the engine, allowing
                    anyone to play against my AI in real-time from a web browser.
                </span>

                <br />

                <span className='inner-experience-text'>
                    Overall, my chess AI demonstrates
                    my ability to create complex and efficient software solutions, as well as my passion for
                    problem-solving and pushing the boundaries of what's possible.
                </span>
            </div>
        </div>
    )
}
