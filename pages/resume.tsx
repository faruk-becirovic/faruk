import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Oswald } from '@next/font/google';
import { Inter } from '@next/font/google';
import styles from '../styles/Resume.module.css';

import Layout from '../components/layout';
import Experience from '../components/experience';
import { homedir } from 'os';

const font = Oswald({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Faruk Becirovic</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.svg" />
            </Head>
            <Layout>
                <main className={styles.main + " " + font.className}>
                    <div className={styles.resume}>
                        <h1>Education</h1>
                        <hr />
                        <Experience
                            className={styles.section}
                            institute="International University of Sarajevo"
                            time="2019-present"
                            address="Hrasnička cesta 15, Ilidža, 71210, Sarajevo, Bosnia and Herzegovina"
                            href="https://www.ius.edu.ba/en"
                            link="www.ius.edu.ba"
                            position="Bachelor of Science, Software Engineering"
                        />
                        <h1>Experience</h1>
                        <hr />
                        <Experience
                            className={styles.section}
                            institute="Digiqal"
                            time="07/2022-10/2022"
                            href="https://digiqal.de/en-US/"
                            link="www.digiqal.de"
                            position="Full-stack Developer"
                        >
                            Developing webapplications using Django
                            framework, as well as React in compination
                            with next.js. My responsabillities included
                            constructing webaplications per user
                            specifications as well as connectiong them
                            with various server-side functionalities.
                            Languages used: Python, JavaScript.
                            Frameworks: Django, React, Next.js
                        </Experience>
                        <Experience
                            className={styles.section}
                            institute="SOCIALEXPLORER"
                            time="11/2021-02/2022"
                            href="https://www.socialexplorer.com/"
                            link="www.socialexplorer.com"
                            position="Data Analyst, intern"
                        >
                            My responsibilities included collection
                            using web-scraping techniques, import,
                            inspection, cleaning, transformation,
                            validation of data. Use of Google APIs and
                            various Google applications including
                            Google docs, Google Maps...
                            Languages used: Python, JavaScript
                        </Experience>
                        <Experience
                            className={styles.section}
                            institute="Codecta"
                            time="10/2021-07/2021"
                            href="https://codecta.com/"
                            link="codecta.com"
                            position="Software Engineer, intern"
                        >
                            Codecta Full Stack Academy, is an
                            Internship program intended for university
                            students that requires them to learn and
                            apply principles of full-stack software
                            development using Agile Methodology.
                            <ul className={styles.list}>
                                <h3>Technologies used:</h3>
                                <li>Java programming language,</li>
                                <li>Quarkus framework,</li>
                                <li>Dart programming language,</li>
                                <li>Flutter SDK,</li>
                                <li>JavaScript programming language,</li>
                                <li>React framework.</li>
                            </ul>
                        </Experience>
                        <h1>Volountering</h1>
                        <hr />
                        <Experience
                            className={styles.section}
                            institute="Bosnia Initiative for Local Development"
                            time="07/2018-present"
                            href="https://www.bildbosnia.org/"
                            link="www.bildbosnia.org"
                            position="Mentor & Ambassador"
                        >
                            Bosnia Initiative for Local Development
                            (BILD) is an NGO devoted to educating young
                            people and helping them change their lives.
                        </Experience>
                        <Experience
                            className={styles.section}
                            institute="BH Futures Foundation"
                            time="12/2019-09/2020"
                            href="https://www.bhfuturesfoundation.org/"
                            link="bhfuturesfoundation.org"
                            position="Mentorship Programme Participant"
                        >
                            BH Futures Foundation mentorship program is
                            intended to help young and
                            ambitious people from Bosnia and
                            Herzegovina achieve their full potential.
                        </Experience>
                        <h1>Skills</h1>
                        <div className={styles.lists}>
                            <ul>
                                <h3>Programming Languages:</h3>
                                <li>C</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>Julia</li>
                                <li>R</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                            </ul>
                            <ul>
                                <h3>Frameworks:</h3>
                                <li>Maven</li>
                                <li>Quarkus</li>
                                <li>Node.js</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Django</li>
                                <li>NumPy</li>
                                <li>SciPy</li>
                                <li>Flutter</li>
                            </ul>
                            <ul>
                                <h3>Interests:</h3>
                                <li>Machine Learning</li>
                                <li>Data Science</li>
                                <li>Bioinformatics</li>
                            </ul>
                        </div>
                        <hr />
                        <h1>Languages</h1>
                        <h3>English</h3>
                        <p>Professional profficiency, C1</p>
                        <h3>Bosnian</h3>
                        <p>Native profficiency</p>
                        <hr />
                    </div>
                </main>
            </Layout>
        </>
    )
}
