import React from 'react';
import s from './NavButton.module.sass';

export default function NavButton({ children }) {
  return <div className={s.navButton}>{children}</div>;
}
