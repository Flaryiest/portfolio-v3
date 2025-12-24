import styles from "./projectCard.module.css"

export default function ProjectCard({company, title, description, link, startDate, endDate}: {company: string, title: string, description: string, link: string, startDate: string, endDate: string}) {
    return <>
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.cardDate}>
                    <p>{startDate} - {endDate}</p>
                </div>
                <div className={styles.cardContent}>
                    <a href={link}><h3 className={styles.cardCompany}>{company}</h3></a>
                    <h4 className={styles.cardTitle}>{title}</h4>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
            </div>
        </div>
    </>
}