import React from 'react';
import s from './Description.module.sass';

export default function Description({ children, color = '#969AA0' }) {
  return (
    <p className={s.description} style={{ color: color }}>
      {children}
    </p>
  );
}
