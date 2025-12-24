import styles from './index.module.css'
import { Link } from 'react-router-dom'
export default function Index() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.centered}>
                    <header className={styles.header}>
                        <div className={styles.logoContainer}>
                            <img
                                src="/logo.png"
                                className={styles.logo}
                                alt="Eric Zuo"
                            />
                        </div>
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
                    <div className={styles.content}></div>
                </div>
            </div>
        </>
    )
}
