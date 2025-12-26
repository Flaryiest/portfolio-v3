import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <h1 className={styles.title}>Eric Zuo</h1>
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/about" className={styles.navLink}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={styles.navLink}>
                            Projects
                        </Link>
                    </li>

                    <li>
                        <a
                            href="/Eric_Zuo_Resume.pdf"
                            className={styles.navLink}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
