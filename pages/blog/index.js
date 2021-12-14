import React from 'react'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import Image from 'next/image'
import Hero from '../../components/Hero'
import Articles from '../../components/Articles'

export default function Blog({ articles }) {
  return (
    <div>
      <div className="text-gray-700">
        <main className="flex justify-center">
          <div className="md:w-[800px]">
            <div className="">
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
            <div className="">
              <h1>Articles</h1>
              <Articles articles={articles} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

Blog.defaultProps = {
  articles: [],
}

export function getStaticProps(ctx) {

  const files = fs.readdirSync(path.join('articles'))

  // Get slug and frontmatter from posts
  const articles = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('articles', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })
  return {
    props: { articles }
  }
}