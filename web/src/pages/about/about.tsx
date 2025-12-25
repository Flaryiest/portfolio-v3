import styles from './about.module.css'

export default function AboutPage() {
    return <div className={styles.content}>
        <h1 className={styles.header}>So much to see, so much to do. But first I need to figure out how to center a div.</h1>
        <p className={styles.paragraph}>
            I have a holistic view on life. Every skill, every experience leads to growth across the board.
        </p>
        <img src="/horizontal.jpg" alt="pic of me in front of a camera" className={styles.image}></img>
        <br></br>
        <p className={styles.paragraph}>A bit about me - I was born in Calgary, Alberta, Canada, and have spent the majority of my life living here. In high school, I have been doing a partial IB Diploma Programme, going in-depth in math and computer science. In the future, I hope to travel a lot more and see the world, especially outside of Canada.</p>
        <br></br>
        <p className={styles.paragraph}>Even though most of my programming and technical work is done outside of school, I spend a lot of time in school working on my other passions. Specifically, I have been involved heavily in Model UN, even travelling to Vancouver for a conference. Additionally, I am in my school's creative writing club, and had the cool experience of seeing a play I wrote performed at a local festival.</p>
        <p className={styles.paragraph}>Throughout the past few years, I have tried to explore anything that piques my curiosity, whether it be the inner-workings of react, basic psychology, or what a GTM does. Recently, in my free time I have been trying to read as much as possible, and just be the best person I can be.</p>
        <p className={styles.paragraph}>The main thing that drives me forward is a desire to change the world for the better in some small way.</p>
    </div>
}
