import styles from './index.module.css'
import WorkCard from '../../components/workCard/workCard'
import Distinction from '../../components/distinction/distinction'
export default function Index() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.leftWall}></div>
                <div className={styles.centered}>
                    <h1 className={styles.visuallyHidden}>Eric Zuo - Portfolio</h1>
                    <div className={styles.content}>
                        <div className={styles.socials}>
                            <a
                                href="https://www.linkedin.com/in/ericzuo8/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/ZuoEric8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="X (Twitter)"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Flaryiest"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="GitHub"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:ericmzuo1@gmail.com"
                                className={styles.socialLink}
                                aria-label="Email"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                </svg>
                            </a>
                        </div>
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
                    <div className={styles.work}>
                        <h2 className={styles.visuallyHidden}>Work Experience</h2>
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
                    <div className={styles.distinctions}>
                        <h2 className={styles.distinctionsTitle}>
                            Small but unique parts of my life
                        </h2>
                        <Distinction
                            title="Hack The Change 2024"
                            description="1st Place Winner. Won $5 000 ->"
                            link="https://devpost.com/software/changepod"
                        />
                        <Distinction
                            title="MiniMedi Hacks 2024"
                            description="1st Place Winner. 300 Participants ->"
                            link="https://devpost.com/software/lifepod"
                        />
                        <Distinction
                            title="GenTalks"
                            description="Web Developer ->"
                            link="https://gentalks.vercel.app/"
                        />
                        <Distinction
                            title="Calgary Science Spelling Challenge"
                            description="IT Director ->"
                            link="https://csschallenge.org"
                        />
                        <Distinction
                            title="Elvaria Music Foundation"
                            description="IT Director ->"
                            link="https://elvaria.ca/"
                        />
                        <Distinction
                            title="Undercity Hackathon"
                            description="Flown out to SF for a hackathon ->"
                            link="https://www.youtube.com/watch?v=kaEFv7e49mo"
                        />
                        <Distinction
                            title="Honours with Distinction"
                            description="Every semester, every year"
                            link=""
                        />
                        <Distinction
                            title="Vex Robotics"
                            description="3388A ->"
                            link="https://www.robotevents.com/teams/V5RC/3388A"
                        />
                        <Distinction
                            title="Ascend"
                            description="Catch me building on Saturdays ->"
                            link="https://www.ascendcalgary.ca/"
                        />
                    </div>
                </div>
                <div className={styles.rightWall}></div>
            </div>
        </>
    )
}
