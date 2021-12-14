import Article from '../Article';

const Articles = ({ articles }) => {
  return (
    <ul className="">
      {articles?.map(article => {
        return (
          <Article
            key={article.slug}
            href={`/blog/${article.slug}`}
            title={`${article.frontmatter.title}`}
            readTime={article.frontmatter.readTime}
            publishedOn={article.frontmatter.publishedOn}
          />
        )
      })}
    </ul>
  )
}

export default Articles;