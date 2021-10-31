import Image from 'next/image'
import Hero from '../../components/Hero'

import styles from '../../styles/Home.module.css'

export default function Blog() {
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.heroHeader}>
            <Hero
              heroTitle="Blogs/Articles"
              heroDescription="I share articles on subjects that I have a deep knowledge on and the ones I’m currently learning."
              emoji={
                <Image
                  src="/pencil.png"
                  width={50}
                  height={50}
                  alt="Pencil"
                />
              }
            />
          </div>
          <div className={styles.about}>
            <h1>Articles</h1>
            <p>
            I share articles on subjects that I have a deep knowledge on and the ones I’m currently learning.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
