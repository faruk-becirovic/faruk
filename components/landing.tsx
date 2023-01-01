import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Landing(props) {
    return (
        <div className={props.className} id={props.id}>
            <div className={styles.center}>
                <h1 className={props.text}>
                    Hello, World!
                </h1>
                <h1 className={props.text}>
                    My name is Faruk Becirovic
                </h1>
                <h2 className={props.text}>
                    I am an experienced Data Analyst and
                    Software Engineer
                </h2>
            </div>
            <div className={styles.landingLinks}>
                <Link href="/#projects"><p>Projects </p></Link>
                <Link href="/#about"><p>About me</p></Link>
                <Link href="/#contact"><p>Reach out</p></Link>
            </div>
        </div>
    );
}
