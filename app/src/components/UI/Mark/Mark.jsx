import React from 'react';
import s from './Mark.module.sass';

export default function Mark({ children, text = '', color = '#fff' }) {
  return (
    <div className={s.mark}>
      <p className={s.title} style={{ color: color }}>
        {children}
      </p>
      <p className={s.subtitle}>{text}</p>
    </div>
  );
}
