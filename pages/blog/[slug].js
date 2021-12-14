import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'

const BlogArticle = ({ frontmatter: { title, summary }, slug, content }) => {
  return (
    <div>
      <Head>
        <title>{`Wiz Sullivan | ${title}`}</title>
        <meta name="description" content={summary} />
      </Head>
      <div className="">
        <main className="flex justify-center">
          <div className="md:w-[800px]">
          <article>
            <h1 className="">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </article>
          </div>
        </main>
      </div>
    </div>
  )
}

BlogArticle.defaultProps = {}

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

export default BlogArticle;
