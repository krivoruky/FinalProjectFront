import React from 'react';
import s from './Article.module.sass';
import Description from '../../UI/Description';

export default function Article({ name, comment, date, picture }) {
  return (
    <div className={s.article}>
      <img src={`../media/${picture}`} alt={picture} />
      <div className={s.text}>
        <p className={s.title}>{name}</p>
        <Description>{comment}</Description>
        <p className={s.data}>{date}</p>
      </div>
    </div>
  );
}
