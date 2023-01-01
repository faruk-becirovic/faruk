import Link from "next/link";

export default function Project(props) {

    return (
        <Link
            className={props.className}
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
        </Link>
    );
}
