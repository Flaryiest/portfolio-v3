import styles from './index.module.css'
import { Link } from 'react-router-dom'
import WorkCard from '../../components/workCard/workCard'

export default function Index() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.leftWall}></div>
                <div className={styles.centered}>
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
                        <WorkCard
                            company="Heartline.App"
                            title="Software Engineer Intern"
                            description="Heartline is an AI-powered mental health app that provides users with personalized support and resources. As a software engineer intern at Heartline, I worked on developing new features and improving the user experience of the app. I also collaborated with the design team to create a more intuitive and engaging interface. Primarily worked on the intervention pipeline, with React Native and Golang."
                            link="https://heartline.app"
                            startDate="APR 2025"
                            endDate="AUG 2025"
                        />
                        <WorkCard
                            company="Futurlign"
                            title="Co-Founder & CTO"
                            description="Futurlign is a Non-profit organization dedicated to AI education and accessibility. After co-founding Futurlign in 2023 and serving as the CTO, we have educated 300+ students on AI. Looking to expand our scope of operations and host a hackathon soon."
                            link="https://futurlign.org"
                            startDate="OCT 2023"
                            endDate="PRESENT"
                        />
                    </div>
                </div>
                <div className={styles.rightWall}></div>
            </div>
        </>
    )
}
