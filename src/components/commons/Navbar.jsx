import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.navContainer}>
                <ul className={styles.navGroup + ' ' + styles.navGroupLeft}>
                    <li>
                        <h1 className={styles.logo}>Pixer</h1>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Contact support</a>
                    </li>
                </ul>
                <ul className={'' + styles.navGroup + ' ' + styles.navGroupRight}>
                    <li>
                        <a href="#">Register</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}