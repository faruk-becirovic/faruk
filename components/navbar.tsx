import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import profileImage from '../public/IMG_1515.jpg';

export default function Navigation(props: any) {
    return (
        <div className={styles.navigation}>
            <div className={styles.navHeader}>
                <Image
                    src={profileImage}
                    alt="Faruk's image"
                    className={styles.navImg}
                />
                <p>Faruk <br /> Becirovic </p>
            </div>
            <div className={styles.navLinks}>
                <a href="/#projects"><p>Projects </p></a>
                <a href="/#about"><p>About me</p></a>
                <a href="/#contact"><p>Reach out</p></a>
            </div>
        </div>
    );
}
