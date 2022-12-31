import styles from '../styles/Home.module.css'

export default function Landing(props) {
    return (
        <div className={props.className}>
            <div className={styles.landingText}>
                <h1 className={props.text}>Hello, World!</h1>
                <h1 className={props.text}>My name is Faruk Becirovic</h1>
                <h2 className={props.text}>I am an experienced Data Analyst and Software Engineer</h2>
            </div>
            <div className={styles.landingLinks}>
                <a><p>Projects </p></a>
                <a><p>About me</p></a>
                <a><p>Reach out</p></a>
            </div>
        </div>
    );
}
