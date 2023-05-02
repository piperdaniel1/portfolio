import Header from './Header';
import './AllProjects.css'
import projects from '../data/AllProjects.json';
import ProjectListing from './ProjectListing';

export default function AllProjects() {
    console.log(projects);

    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>

            <div className='projects-section-wrapper'>
                {
                    projects.projects.map((project, index) =>
                        <ProjectListing key={index} {...project} />)
                }
            </div>
        </div>
    )
}
