import Link from "next/link";

export default function Experience(props: any) {
    return (
        <div className={props.className}>
            <h1>{props.position}</h1>
            <h2>{props.institute}</h2>
            <h3>{props.time}</h3>
            <Link href={props.href}>{props.link}</Link>
            <p>{props.children}</p>
        </div>
    );
}
