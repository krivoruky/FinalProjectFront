import React from 'react';
import Title from '../UI/Title';
import Article from './Article/Article';
import s from './Articles.module.sass';

export default function Articles({ articles }) {
  return (
    <div className={s.articles}>
      <Title>Articles & Resources</Title>
      <div className={s.card}>
        {articles.map(article => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}
