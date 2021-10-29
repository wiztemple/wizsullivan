import Image from 'next/image'
import ExperienceCard from '../components/ExperienceCard'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.heroHeader}>
            <Hero
              heroTitle="Hello, I’m Sullivan"
              heroDescription="I’m a Frontend Engineer based in Lagos."
            />
          </div>
          {/* <h1 className={styles.title}>
          Sullivan Wisdom <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}
          <div className={styles.about}>
            <h1>About</h1>
            <p>
              Closures are different. By the time most people approach closures,
              they have already used them unknowingly many times — and it is
              likely that this is true for yourself, too. So learning closures
              is less about understanding a new concept and more about recognizing
              something you have already been doing for a while.

            </p>
          </div>
          <div className={styles.cvWrapper}>
            <h1>Education & Experience</h1>
            <div className={styles.cv}>
              <div className={styles.experienceWrapper}>
                <h1>Work Experience</h1>
                <ExperienceCard
                  time="June 2021 - Present"
                  jobTitle="Javascript Engineer"
                  company="Gitstart, San Francisco, CA."
                />
                <ExperienceCard
                  time="December 2019 - June 2020"
                  jobTitle="Software Developer"
                  company="Hornblower Cruises, San Francisco CA."
                />
                <ExperienceCard
                  time="October 2018 - October 2020"
                  jobTitle="Software Developer"
                  company="Andela, Ilupeju Lagos."
                />
                <ExperienceCard
                  time="February 2017 - July 2017"
                  jobTitle="Web Design Intern"
                  company="e-settlement, Yaba Lagos."
                />
              </div>
              <div className={styles.educationWrapper}>
                <h1>Education</h1>
                <ExperienceCard
                  time=""
                  jobTitle="B.Tech Information Technology"
                  company="Federal Univesity of Technology, Owerri(FUTO)."
                />
                <h1>Tools in my toolkit</h1>
                <ul>
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                  <li>Vuejs</li>
                  <li>UI/UX with Figma</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a> */}

            {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a> */}

            {/* <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a> */}

            {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
