import Image from 'next/image'
import Article from '../../components/Article'
import Hero from '../../components/Hero'

import styles from '../../styles/Home.module.css'

export default function Blog() {
  const slug ="js-replace-null-with-es6-symbols"
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
            <ul className={styles.p0}>
              <Article 
              title="Replace null with ES6 Symbols" 
              created="October 2021" 
              readTime="8 min read" 
              href="/slug"
              as={`/${slug}`}
              />
              <Article 
              title="The start of a new era for Responsive Web Design" 
              created="May 2021" 
              readTime="8 min read" 
              href="/slug"
              as={`/${slug}`}
              />
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
