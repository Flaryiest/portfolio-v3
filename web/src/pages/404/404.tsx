import styles from './404.module.css'
export default function NotFoundPage() {
    return <div className={styles.page}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.description}>
            Oops! The page you're looking for doesn't exist.
        </p>
    </div>
}
