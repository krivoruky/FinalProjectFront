import React from 'react';
import s from './Social.module.sass';

export default function Social({
  children,
  color = '#000',
  backgroundColor = '#fff',
  outline = '1px solid transparent'
}) {
  return (
    <div
      className={s.social}
      style={{
        color: color,
        backgroundColor: backgroundColor,
        outline: outline
      }}
    >
      {children}
    </div>
  );
}
