import TechBubble from './TechBubble';
import { IoSchoolSharp } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiCode } from 'react-icons/hi';
import './ProjectListing.css';

export default function ProjectListing(props) {
    return (
        <div className="project-listing-wrapper">
            <div className="inner-project-listing">
                <div className="project-listing-image">
                    <img src={props.image} alt={props.title} />
                </div>

                <div className="project-listing-details">
                    <div className="project-listing-header">
                        <div className="inner-project-listing-header">
                            <div className="project-listing-title">
                                {
                                    props.type === "personal" ?
                                        <BsFillPersonFill className="project-listing-title-icon" />
                                        :
                                        <IoSchoolSharp className="project-listing-title-icon" />
                                }

                                <h1 className="project-listing-title-text">{props.title}</h1>
                            </div>
                            <div className="project-listing-header-details">
                                <p className="project-listing-title-date">{props.date}</p>
                                <p className="project-listing-title-tagline">{props.tagline}</p>
                            </div>
                        </div>

                        <div className="project-listing-src-link">
                            <a href={props.link} target="_blank" rel="noreferrer">
                                <HiCode className="project-listing-src-link-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="project-listing-description">
                        <p className="project-listing-description-text">{props.description}</p>
                    </div>
                    <div className="project-listing-tech">
                        <div className="inner-project-listing-tech">
                            {
                                props.tech.map((tech, index) =>
                                    <TechBubble key={index} tech={tech} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
