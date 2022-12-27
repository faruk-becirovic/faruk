import Project from '../components/project';

export default function Projects(props) {
    return (
        <div className={props.className}>
            <Project
                projectTitle="Project 1"
                projectDesc="Short description of a project"
            />
            <Project
                projectTitle="Project 2"
                projectDesc="Short description of a project"
            />
            <Project
                projectTitle="Project 3"
                projectDesc="Short description of a project"
            />
            <Project
                projectTitle="Project 4"
                projectDesc="Short description of a project"
            />
            <Project
                projectTitle="Project 5"
                projectDesc="Short description of a project"
            />
            <Project
                projectTitle="Project 6"
                projectDesc="Short description of a project"
            />
        </div>
    );
}
