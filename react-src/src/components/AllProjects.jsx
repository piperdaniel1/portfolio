import Header from './Header';
import './AllProjects.css'
import projects from '../data/AllProjects.json';
import ProjectListing from './ProjectListing';
import Separator from './reusable/Separator';

export default function AllProjects() {
    let tech_list = new Set();
    for (let project of projects.projects) {
        for (let tech of project.technologies) {
            tech_list.add(tech);
        }
    }

    console.log(tech_list);

    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>

            <Separator title="Personal Projects" />
            <div className='projects-section-wrapper'>
                {
                    projects.projects.filter((project) => project['project-type'] === 'personal').map((project, index) =>
                        <ProjectListing key={index} {...project} />)
                }
            </div>

            <Separator title="School Projects" />
            <div className='projects-section-wrapper'>
                {
                    projects.projects.filter((project) => project['project-type'] === 'school').map((project, index) =>
                        <ProjectListing key={index} {...project} />)
                }
            </div>
        </div>
    )
}
