import Project from '../components/project';

export default function Projects(props) {
    return (
        <div className={props.className} id={props.id}>
            <div className={props.cards}>
                <Project
                    className={props.card}
                    projectTitle="Project 1"
                    projectDesc="Short description of a project"
                    link="https://github.com/faruk-becirovic?tab=repositories"
                />
                <Project
                    className={props.card}
                    projectTitle="Project 2"
                    projectDesc="Short description of a project"
                    link="https://github.com/faruk-becirovic?tab=repositories"
                />
                <Project
                    className={props.card}
                    projectTitle="Project 3"
                    projectDesc="Short description of a project"
                    link="https://github.com/faruk-becirovic?tab=repositories"
                />
                <Project
                    className={props.card}
                    projectTitle="Project 4"
                    projectDesc="Short description of a project"
                    link="https://github.com/faruk-becirovic?tab=repositories"
                />
                <Project
                    className={props.card}
                    projectTitle="Project 5"
                    projectDesc="Short description of a project"
                    link="https://github.com/faruk-becirovic?tab=repositories"
                />
                <Project
                    className={props.card}
                    projectTitle="Project 6"
                    projectDesc="Short description of a project"
                    link="https://github.com/faruk-becirovic?tab=repositories"
                />
            </div>
        </div>
    );
}
