import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Footer(props: any) {
    let linkedin: string = "https://www.linkedin.com/in/faruk-becirovic-57b7101a0/";
    let github: string = "https://github.com/faruk-becirovic";

    return (
        <div className={styles.footer}>
            <ul className={styles.outpage}>
                <li>
                    <Link href={linkedin}>
                        <p>Linked in</p>
                    </Link>
                </li>
                <li>
                    <Link href={github}>
                        <p>Git Hub</p>
                    </Link>
                </li>
            </ul>
            <ul className={styles.onpage}>
                <li>
                    <Link href={"/#projects"}>
                        <p>Projects</p>
                    </Link>
                </li>
                <li>
                    <Link href={"/#about"}>
                        <p>About me</p>
                    </Link>
                </li>
                <li>
                    <Link href={"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"}>
                        <p>Reach out</p>
                    </Link>
                </li>
                <li>
                    <Link href={"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"}>
                        <p>Resume</p>
                    </Link>
                </li>
            </ul>
            <div className={styles.notice}>
                <p>
                    &copy; 2022. Faruk Bećirović.
                </p>
                <p>
                    All rights reserved. | Sva prava pridržana.
                </p>
            </div>
        </div>
    );
}
