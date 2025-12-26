import styles from './distinction.module.css'

export default function Distinction({
    title,
    description,
    link,
}: {
    title: string
    description: string
    link?: string
}) {
    return (
        <a href={link} className={styles.distinction}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </a>
    )
}
