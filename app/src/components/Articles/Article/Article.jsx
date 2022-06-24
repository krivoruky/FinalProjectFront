import React from 'react';
import s from './Article.module.sass';
import img from '../../../media/Man3.png';
import Description from '../../UI/Description';

export default function Article({ name, comment, date }) {
  return (
    <div className={s.article}>
      <img src={img} alt="man" />
      <div className={s.text}>
        <p className={s.title}>{name}</p>
        <Description>{comment}</Description>
        <p className={s.data}>{date}</p>
      </div>
    </div>
  );
}
