import styles from './projectCard.module.css'
export default function ProjectCard({
    imgSrc,
    title,
    description,
    technologies,
    url,
    year,
}: {
    imgSrc: string
    title: string
    description: string
    technologies: string[]
    url: string
    year: string
}) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={imgSrc} alt={title} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.title}>{title}</h2>
                        <span className={styles.year}>{year}</span>
                    </div>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.techContainer}>
                        {technologies.join(', ')}
                    </div>
                    <a href={url} className={styles.projectLink}>
                        link ↗
                    </a>
                </div>
            </div>
        </div>
    )
}
