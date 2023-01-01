import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function About(props) {
    return (
        <div className={styles.about} id={props.id}>
            <div className={styles.aboutText}>
                <p>
                    My name is Faruk Becirovic. I currently live in
                    Sarajevo, Bosnia and Herzegovina. I am a big
                    fan of LOTR. I also love riddles, and I am
                    curious about problem-solving. I enjoy spending
                    time programming and tweaking my configuration
                    of GNU/Linux. By the way, I am an Arch fanboy.
                </p>
                <p>
                    Currently, I am a student at the Faulty of
                    Engineering and Natural Sciences of the
                    The International University of Sarajevo.
                    I study
                    Software Engineering, which is something I was
                    interested in for years. I am currently in my
                    final year of studies.
                </p>
                <p>
                    I have experience working as a full-stack
                    software engineer and a data analyst. I have
                    developed REST APIs in Java. I have also
                    built mobile apps using Flutter. I used
                    React.js with Next.js, and Django to make web
                    sites and web applications.
                </p>
                <p>
                    I am interested in many things and technologies.
                    My interests include anything related to
                    computers, especially machine learning and
                    data analysis.
                    Recently I have explored topics such as
                    Machine Learning, Data Science, Numerical
                    Analysis, and many more. On this website, I
                    have included some projects I have worked on in
                    my spare time. Mostly things I am passionate
                    and curious about.
                </p>
                <p>
                    If any of these things are interesting to you,
                    feel free to contact me. We can chat about
                    computers, technology or interesting maths
                    problems.
                </p>
            </div>
            <div className={styles.aboutButton}>
                <Link href="/resume"><p>Résumé</p></Link>
            </div>
        </div>
    );
}
