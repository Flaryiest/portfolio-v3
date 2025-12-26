import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import Navbar from '../components/navbar/navbar'
export default function Layout() {
    return (
        <div className={styles.container}>
            <div className={styles.page}>
                <div className={styles.leftWall}></div>
                <main className={styles.centered}>
                    <Navbar />
                    <Outlet />
                </main>
                <div className={styles.rightWall}></div>
            </div>
        </div>
    )
}
