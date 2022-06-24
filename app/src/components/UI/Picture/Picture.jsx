import React from 'react';
import s from './Picture.module.sass';

export default function Picture({ img }) {
  return (
    <div className={s.picture}>
      <img src={img} alt="Author" />
    </div>
  );
}
