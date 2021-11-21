import React from 'react'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import Image from 'next/image'
import Hero from '../../components/Hero'
import styles from '../../styles/Home.module.css'
import Articles from '../../components/Articles'

export default function Blog({articles}) {
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
            {/* <ul className={styles.p0}>
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
            </ul> */}
            <Articles articles={articles}/>
          </div>
        </main>
      </div>
    </div>
  )
}

Blog.defaultProps = {
  articles: [],
}

export function getStaticProps(ctx){

  // const articlePath = path.join(process.cwd(), 'articles')
  // const filenames = fs.readdirSync(articlePath)
  // Get files from the posts directory
  const files = fs.readdirSync(path.join('articles'))

  // Get slug and frontmatter from posts
  const articles = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')
    
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('articles', filename), 'utf-8');

    const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })
  // console.log(articles)
  // const fileArticles = filenames.map((name) => {
  //   const fullPath = path.join(process.cwd(), 'articles', name)
  //   const file = fs.readFileSync(fullPath, 'utf-8')
  //   const {data} = matter(file)
  //   return data
  // })

  // const articles = [...fileArticles]
  return {
    props: {articles}
  }
}