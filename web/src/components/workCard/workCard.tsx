import styles from './workCard.module.css'

export default function WorkCard({
    company,
    title,
    description,
    link,
    startDate,
    endDate,
}: {
    company: string
    title: string
    description: string
    link: string
    startDate: string
    endDate: string
}) {
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.cardDate}>
                        <p className={styles.date}>
                            {startDate} - {endDate}
                        </p>
                    </div>
                    <div className={styles.cardContent}>
                        <a href={link} className={styles.companyLink}>
                            <h3 className={styles.cardCompany}>{company}</h3>
                            <svg
                                className={styles.arrow}
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                        <h4 className={styles.cardTitle}>{title}</h4>
                        <p className={styles.cardDescription}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
