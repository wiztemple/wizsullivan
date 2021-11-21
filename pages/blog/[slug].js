import React from 'react';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const BlogArticle = ({ frontmatter: { title, summary }, slug, content }) => {
  return (
    <div>
      <Head>
        <title>{`Wiz Sullivan | ${title}`}</title>
        <meta name="description" content={summary} />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <article>
            <h1 className={styles.articleheader}>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </article>
        </main>
      </div>
    </div>
  )
}

// BlogArticle.defaultProps = {
//   source: '',
//   frontMatter: { title: 'default title', summary: 'summary', publishedOn: '' },
// }

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('articles'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('articles', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
// export function getStaticPaths() {
//   const articlesPath = path.join(process.cwd(), 'articles')
//   const filenames = fs.readdirSync(articlesPath);

//   const slugs = filenames.map(name => {
//     const filePath = path.join(articlesPath, name)
//     const file = fs.readFileSync(filePath, 'utf-8')
//     const { data } = matter(file)
//     return data
//   })

//   return {
//     paths: slugs.map(s => ({ params: { slug: s.slug } })),
//     fallback: true
//   }
// }

// export async function getStaticProps({ params }) {
//   let article

//   try {
//     const filesPath = path.join(process.cwd(), 'articles', params.slug + '.mdx')
//     article = fs.readFileSync(filesPath, 'utf-8')
//   } catch {}
//   const { data } = matter(article)

//   const mdxSource = await serialize(article, { scope: data })
//   console.log(mdxSource, 'mdxsource')
//   return {
//     props: {
//       source: mdxSource,
//       frontMatter: data
//     }
//   }
// }

export default BlogArticle;
