import { Inter } from '@next/font/google'

export default function Project(props) {

    return (
        <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={props.titleStyle}>
                {props.projectTitle} <span>-&gt;</span>
            </h2>
            <p className={props.descStyle}>
                {props.projectDesc}
            </p>
        </a>

    );
}
