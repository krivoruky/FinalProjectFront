import React from 'react';
import s from './Title.module.sass';

export default function Title({ children }) {
  return <h2 className={s.title}>{children}</h2>;
}
