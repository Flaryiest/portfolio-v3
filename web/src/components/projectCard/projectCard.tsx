import styles from "./projectCard.module.css"
export default function ProjectCard({imgSrc, title, description, technologies, url}: {imgSrc: string, title: string, description: string, technologies: string[], url: string}) {
    return <>
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={imgSrc} alt={title} className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                    <h2>{title}</h2>
                    <p className={styles.cardDescription}>{description}</p>
                    <div className={styles.techContainer}>
                        {technologies.join(", ")}
                    </div>
                    <a href={url} className={styles.projectLink}>
                        link ↗
                    </a>
                </div>
            </div>
        </div>
    </>
}