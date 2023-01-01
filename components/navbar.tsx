import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import profileImage from '../public/IMG_1515.jpg';

export default function Navigation(props) {
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
                <Link href="/#projects"><p>Projects </p></Link>
                <Link href="/#about"><p>About me</p></Link>
                <Link href="/#contact"><p>Reach out</p></Link>
            </div>
        </div>
    );
}
