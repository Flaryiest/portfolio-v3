import styles from './index.module.css'
import { Link } from 'react-router-dom'
import WorkCard from '../../components/workCard/workCard'

export default function Index() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.leftWall}></div>
                <div className={styles.centered}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>Eric Zuo</h1>
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
                    <div className={styles.content}>
                        <article className={styles.intro}>
                            <p>Hello, I'm Eric Zuo!</p>
                            <br></br>
                            <p>
                                I'm a student in the IB Diploma Programme at Sir
                                Winston Churchill High School.
                            </p>
                            <p>
                                Currently building Strand, an AI travel agent
                                that adapts your preferences and takes you
                                through the decision making process.
                            </p>
                            <br></br>
                            <p>
                                In my free time, I enjoy reading, writing, and
                                going for long walks. Please feel free to say
                                hi, check out my code, or view my experience.
                            </p>
                            <br></br>
                            <p>
                                I have worked in both 2D and 3D, with companies
                                ranging from nonprofits to YC backed startups.
                                Now I want to work with you.
                            </p>
                        </article>
                    </div>
                    <div className={styles.projects}>
                        <WorkCard
                            company="Magic Hour (YC W24)"
                            title="Software Engineer Intern"
                            description="Magic Hour is an AI platform that accelerates content creation for both the average person, and companies alike. As a software engineer intern at Magic Hour, I have had the pleasure of working on a variety of different AI features. One of my features currently in prod is the AI GIF generator, used >100x a day. Go check us out."
                            link="https://magichour.ai"
                            startDate="AUG 2025"
                            endDate="DEC 2025"
                        />
                    </div>
                </div>
                <div className={styles.rightWall}></div>
            </div>
        </>
    )
}
