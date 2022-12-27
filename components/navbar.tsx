import Image from 'next/image';
import styles from '../styles/Home.module.css';
import profileImage from '../public/IMG_1515.jpg';

export default function Navigation(props) {
    return (
        <div className={props.className}>
            <div className={styles.navHeader}>
                <Image
                    src={profileImage}
                    alt="Faruk's image"
                    className={styles.navImg}
                />
                <p>Faruk <br /> Becirovic </p>
            </div>
            <div className={styles.navLinks}>
                <a><p>Projects </p></a>
                <a><p>About me</p></a>
                <a><p>Reach out</p></a>
            </div>
        </div>
    );
}
