import styles from './about.module.css'

export default function AboutPage() {
    return <div className={styles.content}>
        <h1 className={styles.header}>So much to see, so much to do. But first I need to figure out how to center a div.</h1>
        <p className={styles.paragraph}>
            I have a holistic view on life. Every skill, every experience leads to growth across the board.
        </p>
        <img src="/horizontal.jpg" alt="pic of me in front of a camera" className={styles.image}></img>
    </div>
}
