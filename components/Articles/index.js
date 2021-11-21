import React from 'react';
import styles from './Articles.module.css';
import Article from '../Article';

const Articles = ({ articles, slug }) => {
  return (
    <ul className={styles.articles}>
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
