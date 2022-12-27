import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <div>
                <p>
                    Here goes a that tells something hearthworming
                    about me... Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </p>
            </div>
            <div className={styles.aboutButton}>
                <p>Resume</p>
            </div>
        </div>
    );
}
