import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return      <header className={styles.header}>
                        <h1 className={styles.title}>Eric Zuo</h1>
                        <nav className={styles.nav}>
                            <ul className={styles.navLinks}>
                                <li>
                                    <Link
                                        to="/about"
                                        className={styles.navLink}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/projects"
                                        className={styles.navLink}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/Eric_Zuo_Resume.pdf"
                                        className={styles.navLink}
                                    >
                                        Resume
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
}