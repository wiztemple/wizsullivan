import Image from 'next/image'
import Hero from '../../components/Hero'

import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.heroHeader}>
            <Hero
              heroTitle="Portfolio"
              heroDescription="A selection of some projects I’ve during my career as a Software Developer"
            />
          </div>
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
