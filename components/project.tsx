import Link from "next/link";

export default function Project(props: any) {

    return (
        <Link
            className={props.className}
            href={props.link}
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
