import React from 'react';
import Title from '../UI/Title';
import s from './AuthorsBook.module.sass';
import Book from './Book';

export default function AuthorsBook({ books }) {
  return (
    <section className={s.authorsBook}>
      <Title>The Author’s Book</Title>
      <div className={s.books}>
        {books.map(book => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
