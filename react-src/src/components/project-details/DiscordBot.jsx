import TechBubble from '../TechBubble';
import HarloughNL from '../../sprites/harlough-nl-ex.jpg'
import HarloughTechStack from '../../sprites/harlough-tech-stack.png'
import './DiscordBot.css';

export default function DiscordBot() {
    return (
        <div className='outer-project-wrapper'>
            <div className='project-header-wrapper'>
                <h1 className='section-header-text'>Harlough - The AI Music Discord Bot</h1>
                <TechBubble lang='python' />
            </div>

            <div className='body-text-wrapper'>
                <span className='inner-experience-text'>
                    To learn more about backend Python development, I developed Harlough, a Discord
                    bot completely written in Python with around 1800 lines of code. Initially, it was
                    designed as a replacement for other discontinued Discord bots that played music from
                    YouTube in Guild voice channels. Over time, I expanded its functionality to include
                    features such as playing songs, queuing them up, pausing, and clearing the queue.
                </span>

                <div className='harlough-nl-wrapper'>
                    <img className='harlough-nl-img' src={HarloughNL} alt="Harlough playing Adele\'s Someone Like You in response to a natural language query" />
                    <p className='img-caption'>Harlough responding to a natural language query</p>
                </div>

                <span className='inner-experience-text'>
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

                <div className='harlough-nl-wrapper'>
                    <img className='harlough-nl-img' src={HarloughTechStack} alt="Harlough's underlying tech stack" />
                    <p className='img-caption'>Harlough's underlying tech stack</p>
                </div>
                    
                <span className='inner-experience-text' >
                    In short, I developed Harlough to provide a seamless music experience for Discord users with features that optimize performance and provide an intuitive interface.
                </span>
            </div>
        </div>
    )
}
