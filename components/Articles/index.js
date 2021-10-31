import React from 'react';
import Article from '../Article';

const Articles = ({ articles, slug }) => {
  return (
    <ul>
      {articles?.map(article => {
        return (
          <Article
            key={article.slug}
            href="/[slug]"
            as={`/${article.slug}`}
            title={`${article.title}`}
          />
        )
      })}
    </ul>
  )
}

export default Articles;
