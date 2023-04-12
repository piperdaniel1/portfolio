import TechBubble from './TechBubble';
import ChessGame from './ChessGame';
import HarloughNL from '../sprites/harlough-nl-ex.jpg'

export default function Projects() {
    let innerExperienceStyle = {
        color: '#fff',
        fontSize: '24px',
        fontFamily: "'Roboto', sans-serif",
    }

    return (
        <ul className='paragraph-text-block' style={{
            color: '#fff',
            fontSize: '30px',
            fontFamily: "'Roboto', sans-serif",
        }}>
            <li>Online Chess AI
                <br />
                <TechBubble lang='rust' />
                <TechBubble lang='python' />
                <TechBubble lang='cpp' />
                <br />

                <div className='paragraph-text-block'>
                <span style={innerExperienceStyle}>
                    My chess AI is a testament to my skills as a backend software engineer. Written entirely 
                    in Rust, it uses the minimax algorithm, along with a transposition table and alpha-beta 
                    pruning, to increase search speed. Board evaluation is based on various factors such as
                    piece value and position, making it a formidable opponent for players of all skill levels.
                </span>

                <br />
                <ChessGame />

                <span style={innerExperienceStyle}>
                    With over 5500 lines of Rust code, this is the third version of the AI. The first was
                    written in Python but proved to be too slow, while the second was written in C++, which
                    had its own challenges. Instead of rewriting that version, I took what I had learned and
                    created this third, stable version in Rust. The AI can operate as an engine server using TCP,
                    a chess CLI client, or a remote Lichess bot. To make it accessible to you on this site, I created a
                    Go HTTP web server that converts HTTP requests into TCP requests to the engine, allowing
                    anyone to play against my AI in real-time from a web browser.
                </span>
                    
                <br />

                <span style={innerExperienceStyle}>
                    Overall, my chess AI demonstrates
                    my ability to create complex and efficient software solutions, as well as my passion for
                    problem-solving and pushing the boundaries of what's possible.
                </span>
            </div>
            </li>

            <br />
            <br />

            <li>Python Music Discord Bot - Harlough
                <br />
                <TechBubble lang='python' />
                <br />

                <div className='paragraph-text-block'>
                <span style={innerExperienceStyle}>
                    To learn more about backend Python development, I developed Harlough, a Discord
                    bot completely written in Python with around 1800 lines of code. Initially, it was
                    designed as a replacement for other discontinued Discord bots that played music from
                    YouTube in Guild voice channels. Over time, I expanded its functionality to include
                    features such as playing songs, queuing them up, pausing, and clearing the queue.
                </span>

                <br />
                <img src={HarloughNL} />
                <br />

                <span style={innerExperienceStyle}>
                    Harlough works by downloading songs locally and then streaming the file into the Guild voice channel.
                    To optimize performance, songs are only downloaded once and intelligently reused when the same or similar
                    query is requested again. The bot utilizes fuzzy finding to determine when to use a local song, and I
                    employed the yt_dlp Python package to convert a YouTube video to an MP3. Moreover, Harlough is fully
                    parallelized to run on multiple servers and download multiple songs simultaneously. One of the bot's most
                    prominent features is its intuitive natural language interface that is powered by the ChatGPT API. Users can
                    request a song by describing it in natural language, and Harlough will download and play the requested track.
                    To make this work, I instructed the ChatGPT API to respond with a JSON object that Harlough's backend interprets
                    to execute the required commands.
                </span>
                    
                <br />

                <span style={innerExperienceStyle}>
                    In short, I developed Harlough to provide a seamless music experience for Discord users with features that optimize performance and provide an intuitive interface.
                </span>
            </div>
            </li>
        </ul>
    )
}