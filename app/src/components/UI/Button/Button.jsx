import React from 'react';
import s from './Button.module.sass';

export default function Button({ children, margin = '0' }) {
  return (
    <div className={s.button} style={{ margin: margin }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  );
}
